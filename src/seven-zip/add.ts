import { ChildProcess } from 'child_process';
import { Command } from '../commands';
import { Options } from '../options';
import { Argument, Switch } from '../switches';
import { exec, execSync } from './execute';

export type AddSwitches =
    | Switch.Include
    | Switch.Method
    | Switch.Password
    | Switch.EnableRecurse
    | Switch.DeleteFilesAfterArchiving
    | Switch.CreateSFX
    | Switch.StdIn
    | Switch.StoreNTSecurityInformation
    | Switch.StoreNTFSAlternateStreams
    | Switch.StdOut
    | Switch.FullyQualifiedFilePaths
    | Switch.CompressOpenFiles
    | Switch.SetTimestampAsLatest
    | Switch.Type
    | Switch.Updates
    | Switch.CreateVolumes
    | Switch.WorkingDirectory
    | Switch.Exclude;

export function add(archive: string, args: Argument[] | Options = []): ChildProcess {
    return exec(Command.Add, archive, args);
}

export function addSync(archive: string, args: Argument[] | Options = []): Buffer {
    return execSync(Command.Add, archive, args);
}
