import { ChildProcess } from 'child_process';
import { ReadOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function read(archive: string, options: ReadOptions = {}): ChildProcess {
    options.stdOut = true;

    return exec(Command.Extract, archive, options);
}

export function readSync(archive: string, options: ReadOptions = {}): string | Buffer {
    options.stdOut = true;

    return execSync(Command.Extract, archive, options);
}

export function readFullPaths(archive: string, options: ReadOptions = {}): ChildProcess {
    options.stdOut = true;

    return exec(Command.ExtractWithFullPaths, archive, options);
}

export function readFullPathsSync(archive: string, options: ReadOptions = {}): string | Buffer {
    options.stdOut = true;

    return execSync(Command.ExtractWithFullPaths, archive, options);
}
