import { ChildProcess } from 'child_process';
import { DeleteOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

function del(archive: string, options: DeleteOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Delete, archive, options, callback);
}
exports.delete = del;

export function deleteSync(archive: string, options: DeleteOptions = {}): Buffer {
    return execSync(Command.Delete, archive, options);
}

export function deletePromise(archive: string, options: DeleteOptions = {}): Promise<Result> {
    return execPromise(Command.Delete, archive, options);
}
