import { Switch } from '../switches';

export type LogLevel =
    | Switch.LogAdditionalOperations
    | Switch.DisableLog
    | Switch.LogInternallyProcessedFiles
    | Switch.LogProcessedFiles;
