import { ChildProcess } from 'child_process';
import { AddOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function add(archive: string, options: AddOptions = {}): ChildProcess {
    return exec(Command.Add, archive, options);
}

export function addSync(archive: string, options: AddOptions = {}): Buffer {
    return execSync(Command.Add, archive, options);
}
