import { ChildProcess } from 'child_process';
import { HashOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function hash(archive: string, options: HashOptions = {}): ChildProcess {
    return exec(Command.Hash, archive, options);
}

export function hashSync(archive: string, options: HashOptions = {}): Buffer {
    return execSync(Command.Hash, archive, options);
}
