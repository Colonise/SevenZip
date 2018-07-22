import { Switch } from './switch';

export type Wildcard = '*';
export type FileName = string;
export type ListFile = string;
export type Argument = Switch | Wildcard | FileName | ListFile;
