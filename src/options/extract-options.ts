import { FullyQualityFilePaths } from './fully-qualified-file-paths';
import { Overwrite } from './overwrite';
import { Recurse } from './recurse';

export interface ExtractOptions {
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
     * Specifies the overwrite mode during extraction, to overwrite files already present on disk.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/overwrite.htm
     */
    overwriteMode?: Overwrite;
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
     * Specifies the compression method.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/method.htm
     */
    method?: string;
    /**
     * Specifies a destination directory where files are to be extracted.
     * his switch can be used only with extraction commands.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/output_dir.htm
     */
    outputDirectory?: string;
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
     * Causes 7-Zip to read data from stdin (standard input) instead of from disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdin.htm
     */
    stdIn?: boolean;
    /**
     * Use this switch to store and restore NT (NTFS) security information for files and directories.
     * Note that only NTFS file system supports that feature.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sni.htm
     */
    storeNTSecurityInformation?: string;
    /**
     * Store NTFS alternate streams mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sns.htm
     */
    storeNTFSAlternateStreams?: boolean;
    /**
     * Causes 7-Zip to write output data to stdout (standard output stream) instead of to a disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdout.htm
     */
    stdOut?: boolean;
    /**
     * Use fully qualified file paths.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/spf.htm
     */
    fullyQualifiedFilePaths?: FullyQualityFilePaths;
    /**
     * Specifies the type of archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/type.htm
     */
    type?: string;
    /**
     * Specifies which filenames or wildcarded names must be excluded from the operation.
     * Multiple exclude switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/exclude.htm
     */
    exclude?: string;
    /**
     * Disables most of the normal user queries during 7-Zip execution.
     * You can use this switch to suppress overwrite queries in the Extract and Extract with full paths commands.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/yes.htm
     */
    disableQueries?: boolean;
}
