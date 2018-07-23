import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function update(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.Update, archive, args);
}

export function updateSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.Update, archive, args);
}
