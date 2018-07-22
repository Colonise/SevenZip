import { Command } from '../commands';
import { Options } from '../options';
import { Argument } from '../switches';
import { exec, execSync } from './execute';

export function benchmark(archive: string, args: Argument[] | Options = []) {
    return exec(Command.Benchmark, archive, args);
}

export function benchmarkSync(archive: string, args: Argument[] | Options = []) {
    return execSync(Command.Benchmark, archive, args);
}
