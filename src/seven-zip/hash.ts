import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function hash(archive: string, args: Argument[] | Options = []) {
    return exec(Command.Hash, archive, args);
}

export function hashSync(archive: string, args: Argument[] | Options = []) {
    return execSync(Command.Hash, archive, args);
}
