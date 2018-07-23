import { ChildProcess } from 'child_process';
import { ExtractOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function extract(archive: string, options: ExtractOptions = {}): ChildProcess {
    return exec(Command.Extract, archive, options);
}

export function extractSync(archive: string, options: ExtractOptions = {}): Buffer {
    return execSync(Command.Extract, archive, options);
}

export function extractFullPaths(archive: string, options: ExtractOptions = {}): ChildProcess {
    return exec(Command.ExtractWithFullPaths, archive, options);
}

export function extractFullPathsSync(archive: string, options: ExtractOptions = {}): Buffer {
    return execSync(Command.ExtractWithFullPaths, archive, options);
}
