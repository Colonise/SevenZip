import { ChildProcess } from 'child_process';
import { TestOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function test(archive: string, options: TestOptions = {}): ChildProcess {
    return exec(Command.Test, archive, options);
}

export function testSync(archive: string, options: TestOptions = {}): Buffer {
    return execSync(Command.Test, archive, options);
}
