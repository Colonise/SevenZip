import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function list(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.List, archive, args);
}

export function listSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.List, archive, args);
}
