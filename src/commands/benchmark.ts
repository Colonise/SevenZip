import { ChildProcess } from 'child_process';
import { BenchmarkOptions } from '../options';
import { Command } from './command';
import { exec, execSync } from './execute';

export function benchmark(archive: string, options: BenchmarkOptions = {}): ChildProcess {
    return exec(Command.Benchmark, archive, options);
}

export function benchmarkSync(archive: string, options: BenchmarkOptions = {}): Buffer {
    return execSync(Command.Benchmark, archive, options);
}
