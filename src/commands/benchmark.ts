import { ChildProcess } from 'child_process';
import { BenchmarkOptions } from '../options';
import { Command } from './command';
import { Callback, exec, execPromise, execSync, Result } from './execute';

export function benchmark(archive: string, options: BenchmarkOptions = {}, callback?: Callback): ChildProcess {
    return exec(Command.Benchmark, archive, options, callback);
}

export function benchmarkSync(archive: string, options: BenchmarkOptions = {}): Buffer {
    return execSync(Command.Benchmark, archive, options);
}

export function benchmarkPromise(archive: string, options: BenchmarkOptions = {}): Promise<Result> {
    return execPromise(Command.Benchmark, archive, options);
}
