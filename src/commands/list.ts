import { ChildProcess } from 'child_process';
import { ListOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function list(archive: string, options: ListOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.List, archive, options, callback);
}

export function listSync(archive: string, options: ListOptions = {}): Buffer {
    return execSync(Command.List, archive, options);
}

export function listPromise(archive: string, options: ListOptions = {}): Promise<Result> {
    return execPromise(Command.List, archive, options);
}
