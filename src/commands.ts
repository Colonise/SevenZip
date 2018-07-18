/**
 * A 7zip command.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/commands/index.htm
 */
export enum SevenZipCommand {
    Add = 'a',
    Benchmark = 'b',
    Delete = 'd',
    Extract = 'e',
    Hash = 'h',
    Information = 'i',
    List = 'l',
    Rename = 'rn',
    Test = 't',
    Update = 'u',
    ExtractWithFullPaths = 'x'
}
