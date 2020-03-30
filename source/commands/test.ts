import { ChildProcess } from 'child_process';
import { TestOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function test(archive: string, options: TestOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Test, archive, options, callback);
}

export function testSync(archive: string, options: TestOptions = {}): Buffer {
    return execSync(Command.Test, archive, options);
}

export function testPromise(archive: string, options: TestOptions = {}): Promise<Result> {
    return execPromise(Command.Test, archive, options);
}
