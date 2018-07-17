import * as child_process from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * A 7zip command.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/commands/index.htm
 */
export enum SevenZipCommand {
    Add = 'a',
    Benchmark = 'b',
    Delete = 'd',
    Extract = 'e',
    Hash = 'h',
    Information = 'i',
    List = 'l',
    Rename = 'rn',
    Test = 't',
    Update = 'u',
    ExtractWithFullPaths = 'x'
}

/**
 * A 7zip switch.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm
 */
export enum SevenZipSwitchType {
    StopSwitches = '--',
    ShowDialog = '-ad',
    IncludeArchiveFilenames = '-ai',
    DisableArchiveNameParsing = '-an',
    OverwriteMode = '-ao',
    OverwriteModeOverwrite = '-aoa',
    OverwriteModeSkip = '-aos',
    OverwriteModeRenameExtracted = '-aou',
    OverwriteModeRenameExisting = '-aot',
    ExcludeArchiveFileNames = '-ax',
    OutputLogLevel = '-bb',
    OutputStream = '-bs',
    ShowExecutionTimeStatistics = '-bt',
    IncludeFileNames = '-i',
    CompressionMethod = '-m',
    OutputDirectory = '-o',
    Password = '-p',
    RecursiveSubdirectories = '-r',
    ArchiveNameMode = '-sa',
    ConsoleCharset = '-scc',
    HashFunction = '-scrc',
    ListFilesCharset = '-scs',
    DeleteFilesAfterIncludingToArchive = '-sdel',
    SendArchiveByEmail = '-seml',
    CreateSFXArchive = '-sfx',
    ReadDataFromStdIn = '-si',
    LargePagesMode = '-slp',
    ShowTechnicalInformation = '-slt',
    StoreNTSecurityInformation = '-sni',
    StoreNTFSAlternateStreams = '-sns',
    ExtractFileAsAlternateStream = '-snr',
    StoreHardLinksAsLinks = '-snh',
    StoreSymbolicLinksAsLinks = '-snl',
    WriteDataToStdOut = '-so',
    DisableFileNameWildcardMatching = '-spd',
    EliminateDuplicateRootFolder = '-spe',
    FullyQualifiedFilePaths = '-spf',
    SensitiveCaseMode = '-ssc',
    CompressFilesOpenForWriting = '-ssw',
    TimestampAsMostRecentModifiedFile = '-stl',
    CPUThreadAffinityMask = '-stm',
    ExcludeArchiveType = '-stx',
    ArchiveType = '-t',
    UpdateOptions = '-u',
    CreateVolumes = '-v',
    WorkingDirectory = '-w',
    ExcludeFileNames = '-x',
    AssumeYesOnAllQueries = '-y'
}

/**
 * A 7zip switch with an option.
 */
export interface SevenZipSwitchWithOption {
    type: SevenZipSwitchType;
    option: string;
}

export type SevenZipWildcard = '*';
export type SevenZipFileName = string;
export type SevenZipListFile = string;
export type SevenZipSwitch = SevenZipSwitchType | SevenZipSwitchWithOption;
export type SevenZipArgument = SevenZipSwitch | SevenZipWildcard | SevenZipFileName | SevenZipListFile;

export type SevenZipOverwriteOption =
    | SevenZipSwitchType.OverwriteModeOverwrite
    | SevenZipSwitchType.OverwriteModeRenameExisting
    | SevenZipSwitchType.OverwriteModeRenameExtracted
    | SevenZipSwitchType.OverwriteModeSkip;

export interface SevenZipOptions {
    outputDirectory?: string;
    password?: string;
    overwriteMode?: SevenZipOverwriteOption;
}

export class SevenZip {
    public static sevenZipExecutableLocation: string = path.join(__dirname, '../');

    private static readonly optionDictionary: { [key: string]: SevenZipSwitchType } = {
        outputDirectory: SevenZipSwitchType.OutputDirectory,
        password: SevenZipSwitchType.Password
    };

    public static add(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Add, archive, args);
    }

    public static benchmark(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Benchmark, archive, args);
    }

    public static delete(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Delete, archive, args);
    }

    public static extract(
        archive: string,
        fullPaths: boolean = false,
        args: SevenZipArgument[] | SevenZipOptions = []
    ) {
        return SevenZip.exec(fullPaths ? SevenZipCommand.ExtractWithFullPaths : SevenZipCommand.Extract, archive, args);
    }

    public static hash(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Hash, archive, args);
    }

    public static info(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Information, archive, args);
    }

    public static list(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.List, archive, args);
    }

    public static rename(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Rename, archive, args);
    }

    public static test(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Test, archive, args);
    }

    public static update(archive: string, args: SevenZipArgument[] = []) {
        return SevenZip.exec(SevenZipCommand.Update, archive, args);
    }

    /**
     * Executes a 7zip command.
     *
     * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
     *
     * @param command
     * @param archive
     * @param switches
     * @param args
     */
    public static exec(
        command: SevenZipCommand,
        archive: string,
        args: SevenZipArgument[] | SevenZipOptions = []
        // switches: SevenZipSwitch[] = [],
    ) {
        // const stringifySwitches = SevenZip.stringifySwitches(switches);

        if (!archive || !fs.existsSync(archive)) {
            throw new Error(`Cannot find file "${archive}"`);
        }

        const stringifyArguments = Array.isArray(args)
            ? SevenZip.stringifyArguments(args)
            : SevenZip.parseOptions(args);

        return child_process.execSync(`7za ${command} "${archive}" ${stringifyArguments}`);
    }

    private static stringifySwitch(sevenZipSwitch: SevenZipSwitch): string {
        return typeof sevenZipSwitch === 'string' ? sevenZipSwitch : `${sevenZipSwitch.type}"${sevenZipSwitch.option}"`;
    }

    private static stringifySwitches(switches: SevenZipSwitch[]): string {
        const result: string[] = [];

        switches.forEach(sevenZipSwitch => result.push(SevenZip.stringifySwitch(sevenZipSwitch)));

        return result.join(' ');
    }

    private static stringifyArguments(args: SevenZipArgument[]): string {
        const result: string[] = [];

        args.forEach(sevenZipArgument => result.push(SevenZip.stringifySwitch(<SevenZipSwitch>sevenZipArgument)));

        return result.join(' ');
    }

    private static parseOptions(options: SevenZipOptions): string {
        const result: string[] = [];

        Object.keys(options).forEach(k => {
            const key: keyof SevenZipOptions = <keyof SevenZipOptions>k;
            const option = options[key];
            let sevenZipSwitch: SevenZipSwitch | undefined;

            switch (key) {
                case 'overwriteMode':
                    sevenZipSwitch = <SevenZipOverwriteOption>option;
                    break;

                default:
                    if (options[<keyof SevenZipOptions>key]) {
                        sevenZipSwitch = <SevenZipSwitchWithOption>{
                            type: SevenZip.optionDictionary[key],
                            option: options[<keyof SevenZipOptions>key]
                        };
                    }
            }

            if (sevenZipSwitch) {
                result.push(SevenZip.stringifySwitch(sevenZipSwitch));
            }
        });

        return result.join(' ');
    }
}
