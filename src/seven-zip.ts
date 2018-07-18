import { SevenZipCommand } from './commands';
import { SevenZipSwitch, SevenZipArgument, SevenZipOverwriteOption, SevenZipSwitchWithOption } from './switches';
import * as child_process from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

export interface SevenZipOptions {
    outputDirectory?: string;
    password?: string;
    overwriteMode?: SevenZipOverwriteOption;
}

export const sevenZipExecutableLocation: string = path.join(__dirname, '../');

const optionDictionary: { [key: string]: SevenZipSwitch } = {
    outputDirectory: SevenZipSwitch.OutputDirectory,
    password: SevenZipSwitch.Password
};

export function add(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Add, archive, args);
}

export function benchmark(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Benchmark, archive, args);
}

function del(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Delete, archive, args);
}
exports.delete = del;

export function extract(archive: string, fullPaths: boolean = false, args: SevenZipArgument[] | SevenZipOptions = []) {
    return exec(fullPaths ? SevenZipCommand.ExtractWithFullPaths : SevenZipCommand.Extract, archive, args);
}

export function hash(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Hash, archive, args);
}

export function info(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Information, archive, args);
}

export function list(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.List, archive, args);
}

export function rename(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Rename, archive, args);
}

export function test(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Test, archive, args);
}

export function update(archive: string, args: SevenZipArgument[] = []) {
    return exec(SevenZipCommand.Update, archive, args);
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
export function exec(
    command: SevenZipCommand,
    archive: string,
    args: SevenZipArgument[] | SevenZipOptions = []
    // switches: SevenZipSwitch[] = [],
) {
    // const stringifySwitches = SevenZip.stringifySwitches(switches);

    if (!archive || !fs.existsSync(archive)) {
        throw new Error(`Cannot find file "${archive}"`);
    }

    const parsedArguments = Array.isArray(args) ? stringifyArguments(args) : parseOptions(args);

    return child_process.execSync(`7za ${command} "${archive}" ${parsedArguments}`, {
        cwd: sevenZipExecutableLocation
    });
}

function stringifySwitch(sevenZipSwitch: SevenZipSwitch | SevenZipSwitchWithOption): string {
    return typeof sevenZipSwitch === 'string' ? sevenZipSwitch : `${sevenZipSwitch.type}"${sevenZipSwitch.option}"`;
}

function stringifySwitches(switches: SevenZipSwitch[]): string {
    const result: string[] = [];

    switches.forEach(sevenZipSwitch => result.push(stringifySwitch(sevenZipSwitch)));

    return result.join(' ');
}

function stringifyArguments(args: SevenZipArgument[]): string {
    const result: string[] = [];

    args.forEach(sevenZipArgument => result.push(stringifySwitch(<SevenZipSwitch>sevenZipArgument)));

    return result.join(' ');
}

function parseOptions(options: SevenZipOptions): string {
    const result: string[] = [];

    Object.keys(options).forEach(k => {
        const key: keyof SevenZipOptions = <keyof SevenZipOptions>k;
        const option = options[key];
        let sevenZipSwitch: SevenZipSwitch | SevenZipSwitchWithOption | undefined;

        switch (key) {
            case 'overwriteMode':
                sevenZipSwitch = <SevenZipOverwriteOption>option;
                break;

            default:
                if (options[<keyof SevenZipOptions>key]) {
                    sevenZipSwitch = <SevenZipSwitchWithOption>{
                        type: optionDictionary[key],
                        option: options[<keyof SevenZipOptions>key]
                    };
                }
        }

        if (sevenZipSwitch) {
            result.push(stringifySwitch(sevenZipSwitch));
        }
    });

    return result.join(' ');
}
