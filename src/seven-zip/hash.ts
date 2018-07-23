import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function hash(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.Hash, archive, args);
}

export function hashSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.Hash, archive, args);
}
