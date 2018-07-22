import { Switch } from '../switches/switch';

export type Overwrite =
    | Switch.OverwriteModeOverwrite
    | Switch.OverwriteModeRenameExisting
    | Switch.OverwriteModeRenameExtracted
    | Switch.OverwriteModeSkip;
