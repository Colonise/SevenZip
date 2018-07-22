/**
 * A 7zip command.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/commands/index.htm
 */
export enum Command {
    /**
     * Adds files to archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/add.htm
     */
    Add = 'a',
    /**
     * Measures speed of the CPU and checks RAM for errors.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/bench.htm
     */
    Benchmark = 'b',
    /**
     * Deletes files from archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/delete.htm
     */
    Delete = 'd',
    /**
     * Extracts files from an archive to the current directory or to the output directory.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/extract.htm
     */
    Extract = 'e',
    /**
     * Calculate hash values for files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/hash.htm
     */
    Hash = 'h',
    /**
     * Show information about supported formats
     *
     * More Information: None
     */
    Information = 'i',
    /**
     * Lists contents of archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/list.htm
     */
    List = 'l',
    /**
     * Renames files in archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/rename.htm
     */
    Rename = 'rn',
    /**
     * Tests archive files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/test.htm
     */
    Test = 't',
    /**
     * Update older files in the archive and add files that are not already in the archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/update.htm
     */
    Update = 'u',
    /**
     * Extracts files from an archive with their full paths in the current directory,
     * or in an output directory if specified.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/commands/extract_full.htm
     */
    ExtractWithFullPaths = 'x'
}
