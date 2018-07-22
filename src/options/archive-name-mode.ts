import { Switch } from '../switches';

export type ArchiveNameMode =
    | Switch.ArchiveNameModeAdd
    | Switch.ArchiveNameModeEnsureExtension
    | Switch.ArchiveNameModeExact;
