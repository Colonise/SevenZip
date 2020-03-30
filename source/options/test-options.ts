import { Recurse } from './recurse';

export interface TestOptions {
    /**
     * Specifies the wilcards, filenames or list-files to be included in the command.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
     */
    files?: string[];
    /**
     * Specifies additional include archive filenames and wildcards.
     * Multiple include switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ar_include.htm
     */
    includeArchives?: string;
    /**
     * Disables parsing of the archive_name field on the command line.
     * This switch must be used with the Include Archives switch.
     * If you use a file list for your archives, you specify it with the
     * Include Archives switch, so you need to disable parsing of archive_name
     * field from command line.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ar_no.htm
     */
    disableArchiveNameParsing?: boolean;
    /**
     * Specifies archives to be excluded from the operation.
     * Multiple exclude archive switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ar_exclude.htm
     */
    excludeArchives?: string;
    /**
     * Specifies additional include filenames and wildcards.
     * Multiple include switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/include.htm
     */
    include?: string;
    /**
     * Specifies password.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/password.htm
     */
    password?: string;
    /**
     * Specifies the method of treating wildcards and filenames on the command line.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/recurse.htm
     */
    recurse?: Recurse;
    /**
     * Store NTFS alternate streams mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sns.htm
     */
    storeNTFSAlternateStreams?: boolean;
    /**
     * Specifies which filenames or wildcarded names must be excluded from the operation.
     * Multiple exclude switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/exclude.htm
     */
    exclude?: string;
}
