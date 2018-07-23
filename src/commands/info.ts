import { ChildProcess } from 'child_process';
import { InfoOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function info(archive: string, options: InfoOptions = {}): ChildProcess {
    return exec(Command.Information, archive, options);
}

export function infoSync(archive: string, options: InfoOptions = {}): Buffer {
    return execSync(Command.Information, archive, options);
}
