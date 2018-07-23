import { ChildProcess } from 'child_process';
import { UpdateOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function update(archive: string, options: UpdateOptions = {}): ChildProcess {
    return exec(Command.Update, archive, options);
}

export function updateSync(archive: string, options: UpdateOptions = {}): Buffer {
    return execSync(Command.Update, archive, options);
}
