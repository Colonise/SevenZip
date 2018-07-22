import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function rename(archive: string, args: Argument[] | Options = []) {
    return exec(Command.Rename, archive, args);
}

export function renameSync(archive: string, args: Argument[] | Options = []) {
    return execSync(Command.Rename, archive, args);
}
