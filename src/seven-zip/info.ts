import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function info(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.Information, archive, args);
}

export function infoSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.Information, archive, args);
}
