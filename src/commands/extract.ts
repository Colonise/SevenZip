import { ChildProcess } from 'child_process';
import { ExtractOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function extract(archive: string, options: ExtractOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Extract, archive, options, callback);
}

export function extractSync(archive: string, options: ExtractOptions = {}): Buffer {
    return execSync(Command.Extract, archive, options);
}

export function extractPromise(archive: string, options: ExtractOptions = {}): Promise<Result> {
    return execPromise(Command.Extract, archive, options);
}

export function extractFullPaths(archive: string, options: ExtractOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.ExtractWithFullPaths, archive, options, callback);
}

export function extractFullPathsSync(archive: string, options: ExtractOptions = {}): Buffer {
    return execSync(Command.ExtractWithFullPaths, archive, options);
}

export function extractFullPathsPromise(archive: string, options: ExtractOptions = {}): Promise<Result> {
    return execPromise(Command.ExtractWithFullPaths, archive, options);
}
