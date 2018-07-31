import { path7za } from '7zip-bin';
import * as child_process from 'child_process';
import * as fs from 'fs';
import { ArchiveNameMode, FullyQualityFilePaths, LogLevel, Options, Overwrite, Recurse } from '../options';
import { Switch, SwitchWithOption } from '../switches';
import { Command } from './command';

const baseCommand: string = path7za;

export enum Type {
    Asynchronous,
    Synchronous,
    Promise
}

export type Callback = (error: Error | null, stdout: Buffer, stderr: Buffer) => void;

export interface Result {
    stdout: Buffer;
    stderr: Buffer;
}

/**
 * Executes a 7zip command.
 *
 * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
 *
 * @param command
 * @param archive
 * @param args
 */
export function exec(
    command: Command,
    archive: string,
    options: Options = {},
    callback?: Callback
): child_process.ChildProcess {
    return execute(Type.Asynchronous, command, archive, options, callback);
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
    return execute(Type.Synchronous, command, archive, options);
}

/**
 * Executes a 7zip command, returning a promise with the stdout.
 *
 * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
 *
 * @param command
 * @param archive
 * @param args
 */
export function execPromise(command: Command, archive: string, options: Options = {}): Promise<Result> {
    return execute(Type.Promise, command, archive, options);
}

function execute(
    type: Type.Asynchronous,
    command: Command,
    archive: string,
    options?: Options,
    callback?: Callback
): child_process.ChildProcess;
function execute(type: Type.Synchronous, command: Command, archive: string, options?: Options): Buffer;
function execute(type: Type.Promise, command: Command, archive: string, options?: Options): Promise<Result>;
function execute(type: Type, command: Command, archive: string, options: Options = {}, callback?: Callback) {
    if (!archive) {
        throw new Error(`Expected archive to be defined, but got "${archive}"`);
    } else if (!fs.existsSync(archive)) {
        throw new Error(`Cannot find file "${archive}"`);
    }

    const files = options.files ? options.files.map(file => `"${file}"`) : '';
    const parsedArguments = parseOptions(options);
    const fullCommand = `"${baseCommand}" ${command} "${archive}" ${files} ${parsedArguments} -y`;

    switch (type) {
        case Type.Asynchronous:
            return child_process.exec(fullCommand, { encoding: 'buffer' }, callback);
        case Type.Synchronous:
            return child_process.execSync(fullCommand);
        case Type.Promise:
            return new Promise((resolve, reject) => {
                child_process.exec(fullCommand, { encoding: 'buffer' }, (error, stdout, stderr) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(<Result>{ stdout, stderr });
                    }
                });
            });
        default:
            throw new Error(`Unexpected ExecuteType ${type}`);
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
