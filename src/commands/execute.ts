import { path7za } from '7zip-bin';
import * as child_process from 'child_process';
import * as fs from 'fs';
import { ArchiveNameMode, FullyQualityFilePaths, LogLevel, Options, Overwrite, Recurse } from '../options';
import { Switch, SwitchWithOption } from '../switches';
import { Command } from './command';

const baseCommand: string = path7za;

/**
 * Executes a 7zip command.
 *
 * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
 *
 * @param command
 * @param archive
 * @param args
 */
export function exec(command: Command, archive: string, options: Options = {}): child_process.ChildProcess {
    return execute(false, command, archive, options);
}

/**
 * Executes a 7zip command synchronously.
 *
 * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
 *
 * @param command
 * @param archive
 * @param args
 */
export function execSync(command: Command, archive: string, options: Options = {}): Buffer {
    return execute(true, command, archive, options);
}

function execute(sync: true, command: Command, archive: string, options?: Options): Buffer;
function execute(sync: false, command: Command, archive: string, options?: Options): child_process.ChildProcess;
function execute(sync: boolean = false, command: Command, archive: string, options: Options = {}) {
    if (!archive || !fs.existsSync(archive)) {
        throw new Error(`Cannot find file "${archive}"`);
    }

    const parsedArguments = parseOptions(options);

    if (sync) {
        return child_process.execSync(`"${baseCommand}" ${command} "${archive}" ${parsedArguments} -y`);
    } else {
        return child_process.exec(`"${baseCommand}" ${command} "${archive}" ${parsedArguments} -y`);
    }
}

function stringifySwitch(sevenZipSwitch: Switch | SwitchWithOption): string {
    return typeof sevenZipSwitch === 'string' ? sevenZipSwitch : `${sevenZipSwitch.type}"${sevenZipSwitch.option}"`;
}

const switchWithOptionDictionary: { [TKey in keyof Options]: Switch } = {
    includeArchives: Switch.IncludeArchives,
    excludeArchives: Switch.ExcludeArchives,
    include: Switch.Include,
    method: Switch.Method,
    outputDirectory: Switch.OutputDirectory,
    password: Switch.Password,
    consoleCharset: Switch.ConsoleCharset,
    hashFunction: Switch.HashFunction,
    listFilesCharset: Switch.ListFilesCharset,
    storeNTSecurityInformation: Switch.StoreNTSecurityInformation,
    extractFileAsAlternateStream: Switch.ExtractFileAsAlternateStream,
    cpuThreadAffinityMask: Switch.CPUThreadAffinityMask,
    excludeArchiveType: Switch.ExcludeArchiveType,
    type: Switch.Type,
    update: Switch.Update,
    createVolumes: Switch.CreateVolumes,
    workingDirectory: Switch.WorkingDirectory,
    exclude: Switch.Exclude
};

const booleanSwitchDictionary: { [TKey in keyof Options]: Switch } = {
    disableSwitches: Switch.DisableSwitches,
    showDialog: Switch.ShowDialog,
    disableArchiveNameParsing: Switch.DisableArchiveNameParsing,
    disableProgress: Switch.DisableProgress,
    showExecutionTimeStatistics: Switch.ShowExecutionTimeStatistics,
    deleteFilesAfterArchiving: Switch.DeleteFilesAfterArchiving,
    sendArchiveByEmail: Switch.SendArchiveByEmail,
    createSFX: Switch.CreateSFX,
    stdIn: Switch.StdIn,
    showTechnicalInformation: Switch.ShowTechnicalInformation,
    storeNTSecurityInformation: Switch.StoreNTSecurityInformation,
    replaceColonInAlternateStream: Switch.ReplaceColonInAlternateStream,
    storeHardLinksAsLinks: Switch.StoreHardLinksAsLinks,
    storeSymbolicLinksAsLinks: Switch.StoreSymbolicLinksAsLinks,
    stdOut: Switch.StdOut,
    disableWildcardMatching: Switch.DisableWildcardMatching,
    eliminateDuplicateRootFolder: Switch.EliminateDuplicateRootFolder,
    compressOpenFiles: Switch.CompressOpenFiles,
    setTimestampAsLatest: Switch.SetTimestampAsLatest,
    disableQueries: Switch.DisableQueries
};

function parseOption<TKey extends keyof Options>(
    key: TKey,
    option: Options[TKey]
): Switch | SwitchWithOption | undefined {
    switch (key) {
        case 'overwriteMode':
            return <Overwrite>option;

        case 'logLevel':
            return <LogLevel>option;

        case 'recurse':
            return <Recurse>option;

        case 'archiveNameMode':
            return <ArchiveNameMode>option;

        case 'largePagesMode':
            if (option) {
                return Switch.LargePagesMode;
            } else {
                return Switch.DisableLargePagesMode;
            }

        case 'storeNTFSAlternateStreams':
            if (option) {
                return Switch.StoreNTFSAlternateStreams;
            } else {
                return Switch.DisableStoreNTFSAlternateStreams;
            }

        case 'fullyQualifiedFilePaths':
            return <FullyQualityFilePaths>option;

        case 'caseSensitive':
            if (option) {
                return Switch.CaseSensitive;
            } else {
                return Switch.CaseInsensitive;
            }

        default:
            if (key in switchWithOptionDictionary && option) {
                return <SwitchWithOption>{
                    type: switchWithOptionDictionary[key],
                    option
                };
            } else if (key in booleanSwitchDictionary && option) {
                return booleanSwitchDictionary[key];
            } else {
                return undefined;
            }
    }
}

function parseOptions(options: Options): string {
    const result: string[] = [];

    // tslint:disable-next-line:variable-name
    Object.keys(options).forEach(key => {
        // tslint:disable-next-line:variable-name
        const _switch = parseOption(<keyof Options>key, options[<keyof Options>key]);

        if (_switch) {
            const stringifiedSwitch = stringifySwitch(_switch);

            result.push(stringifiedSwitch);
        }
    });

    return result.join(' ');
}
