import { ChildProcess } from 'child_process';
import { AddOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function add(archive: string, options: AddOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Add, archive, options, callback);
}

export function addSync(archive: string, options: AddOptions = {}): Buffer {
    return execSync(Command.Add, archive, options);
}

export function addPromise(archive: string, options: AddOptions = {}): Promise<Result> {
    return execPromise(Command.Add, archive, options);
}
