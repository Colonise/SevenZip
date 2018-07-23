import { ChildProcess } from 'child_process';
import { ListOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function list(archive: string, options: ListOptions = {}): ChildProcess {
    return exec(Command.List, archive, options);
}

export function listSync(archive: string, options: ListOptions = {}): Buffer {
    return execSync(Command.List, archive, options);
}
