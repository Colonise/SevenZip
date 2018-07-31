import { ChildProcess } from 'child_process';
import { InfoOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function info(archive: string, options: InfoOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Information, archive, options, callback);
}

export function infoSync(archive: string, options: InfoOptions = {}): Buffer {
    return execSync(Command.Information, archive, options);
}

export function infoPromise(archive: string, options: InfoOptions = {}): Promise<Result> {
    return execPromise(Command.Information, archive, options);
}
