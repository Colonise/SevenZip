import { path7za } from '7zip-bin';
import * as child_process from 'child_process';
import * as fs from 'fs';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument, Overwrite, Switch, SwitchWithOption } from '../switches';

const baseCommand: string = path7za;

const optionDictionary: { [key: string]: Switch } = {
    outputDirectory: Switch.OutputDirectory,
    password: Switch.Password
};

/**
 * Executes a 7zip command.
 *
 * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
 *
 * @param command
 * @param archive
 * @param args
 */
export function exec(command: Command, archive: string, args: Argument[] | Options = []) {
    return execute(false, command, archive, args);
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
export function execSync(command: Command, archive: string, args: Argument[] | Options = []) {
    return execute(true, command, archive, args);
}

function execute(sync: true, command: Command, archive: string, args?: Argument[] | Options): Buffer;
function execute(
    sync: false,
    command: Command,
    archive: string,
    args?: Argument[] | Options
): child_process.ChildProcess;
function execute(sync: boolean = false, command: Command, archive: string, args: Argument[] | Options = []) {
    if (!archive || !fs.existsSync(archive)) {
        throw new Error(`Cannot find file "${archive}"`);
    }

    const parsedArguments = Array.isArray(args) ? stringifyArguments(args) : parseOptions(args);

    if (sync) {
        return child_process.execSync(`${baseCommand} ${command} "${archive}" ${parsedArguments} -y`);
    } else {
        return child_process.exec(`${baseCommand} ${command} "${archive}" ${parsedArguments} -y`);
    }
}

function stringifySwitch(sevenZipSwitch: Switch | SwitchWithOption): string {
    return typeof sevenZipSwitch === 'string' ? sevenZipSwitch : `${sevenZipSwitch.type}"${sevenZipSwitch.option}"`;
}

function stringifyArguments(args: Argument[]): string {
    const result: string[] = [];

    args.forEach(sevenZipArgument => result.push(stringifySwitch(<Switch>sevenZipArgument)));

    return result.join(' ');
}

function parseOptions(options: Options): string {
    const result: string[] = [];

    Object.keys(options).forEach(k => {
        const key: keyof Options = <keyof Options>k;
        const option = options[key];
        let sevenZipSwitch: Switch | SwitchWithOption | undefined;

        switch (key) {
            case 'overwriteMode':
                sevenZipSwitch = <Overwrite>option;
                break;

            case 'password':
                if (option == null) {
                    throw new Error(`Password cannot be ${option}`);
                }

            default:
                if (options[<keyof Options>key]) {
                    sevenZipSwitch = <SwitchWithOption>{
                        type: optionDictionary[key],
                        option: options[<keyof Options>key]
                    };
                }
        }

        if (sevenZipSwitch) {
            result.push(stringifySwitch(sevenZipSwitch));
        }
    });

    return result.join(' ');
}
