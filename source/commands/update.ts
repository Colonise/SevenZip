import { ChildProcess } from 'child_process';
import { UpdateOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function update(archive: string, options: UpdateOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Update, archive, options, callback);
}

export function updateSync(archive: string, options: UpdateOptions = {}): Buffer {
    return execSync(Command.Update, archive, options);
}

export function updatePromise(archive: string, options: UpdateOptions = {}): Promise<Result> {
    return execPromise(Command.Update, archive, options);
}
