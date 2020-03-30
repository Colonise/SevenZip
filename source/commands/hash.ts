import { ChildProcess } from 'child_process';
import { HashOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function hash(archive: string, options: HashOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Hash, archive, options, callback);
}

export function hashSync(archive: string, options: HashOptions = {}): Buffer {
    return execSync(Command.Hash, archive, options);
}

export function hashPromise(archive: string, options: HashOptions = {}): Promise<Result> {
    return execPromise(Command.Hash, archive, options);
}
