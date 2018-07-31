import { ChildProcess } from 'child_process';
import { ReadOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function read(archive: string, options: ReadOptions = {}, callback?: Callback): ChildProcess {
    options.stdOut = true;

    return exec(Command.Extract, archive, options, callback);
}

export function readSync(archive: string, options: ReadOptions = {}): Buffer {
    options.stdOut = true;

    return execSync(Command.Extract, archive, options);
}

export function readPromise(archive: string, options: ReadOptions = {}): Promise<Result> {
    options.stdOut = true;

    return execPromise(Command.Extract, archive, options);
}

export function readFullPaths(archive: string, options: ReadOptions = {}, callback?: Callback): ChildProcess {
    options.stdOut = true;

    return exec(Command.ExtractWithFullPaths, archive, options, callback);
}

export function readFullPathsSync(archive: string, options: ReadOptions = {}): Buffer {
    options.stdOut = true;

    return execSync(Command.ExtractWithFullPaths, archive, options);
}

export function readFullPathsPromise(archive: string, options: ReadOptions = {}): Promise<Result> {
    options.stdOut = true;

    return execPromise(Command.ExtractWithFullPaths, archive, options);
}
