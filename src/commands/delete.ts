import { ChildProcess } from 'child_process';
import { DeleteOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

function del(archive: string, options: DeleteOptions = {}): ChildProcess {
    return exec(Command.Delete, archive, options);
}
exports.delete = del;

export function deleteSync(archive: string, options: DeleteOptions = {}): Buffer {
    return execSync(Command.Delete, archive, options);
}
