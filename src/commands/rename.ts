import { ChildProcess } from 'child_process';
import { RenameOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function rename(archive: string, options: RenameOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Rename, archive, options, callback);
}

export function renameSync(archive: string, options: RenameOptions = {}): Buffer {
    return execSync(Command.Rename, archive, options);
}

export function renamePromise(archive: string, options: RenameOptions = {}): Promise<Result> {
    return execPromise(Command.Rename, archive, options);
}
