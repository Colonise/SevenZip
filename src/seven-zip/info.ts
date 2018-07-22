import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function info(archive: string, args: Argument[] | Options = []) {
    return exec(Command.Information, archive, args);
}

export function infoSync(archive: string, args: Argument[] | Options = []) {
    return execSync(Command.Information, archive, args);
}
