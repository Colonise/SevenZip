import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

function del(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.Delete, archive, args);
}
exports.delete = del;

export function deleteSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.Delete, archive, args);
}
