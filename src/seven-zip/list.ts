import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function list(archive: string, args: Argument[] | Options = []) {
    return exec(Command.List, archive, args);
}

export function listSync(archive: string, args: Argument[] | Options = []) {
    return execSync(Command.List, archive, args);
}
