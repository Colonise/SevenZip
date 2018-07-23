import { ChildProcess } from 'child_process';
import { RenameOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function rename(archive: string, options: RenameOptions = {}): ChildProcess {
    return exec(Command.Rename, archive, options);
}

export function renameSync(archive: string, options: RenameOptions = {}): Buffer {
    return execSync(Command.Rename, archive, options);
}
