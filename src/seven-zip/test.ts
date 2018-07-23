import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function test(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.Test, archive, args);
}

export function testSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.Test, archive, args);
}
