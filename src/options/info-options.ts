import { ArchiveNameMode } from './archive-name-mode';
import { FullyQualityFilePaths } from './fully-qualified-file-paths';
import { LogLevel } from './log-level';
import { Overwrite } from './overwrite';
import { Recurse } from './recurse';

export interface InfoOptions {
    /**
     * Disables switch parsing after "--" on the command line.
     * This is to allow 7-Zip to use file names that start with "-".
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stop_switch.htm
     */
    disableSwitches?: boolean;
    /**
     * Show dialog box in GUI version (7zg)
     *
     * More Information: None
     */
    showDialog?: boolean;
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
     * The switch sets output log level for Delete/Add/Update/Extract operations.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bb.htm
     */
    logLevel?: LogLevel;
    /**
     * Disable progress indicator
     *
     * More Information: None
     */
    disableProgress?: boolean;
    /**
     * Redirects the output stream to a different channel.
     *
     * Defaults:
     *
     * Output -> stdout
     * Errors -> stderr
     * Progres -> stdout
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bs.htm
     */
    outputStream?: string;
    /**
     * Show execution time statistics
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm
     */
    showExecutionTimeStatistics?: boolean;
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
     * Specifies Archive name mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sa.htm
     */
    archiveNameMode?: ArchiveNameMode;
    /**
     * Set charset for for console input/output
     *
     * More Information: None
     */
    consoleCharset?: string;
    /**
     * Sets hash function for "extract" and "hash" commands.
     *
     * Supported methods: CRC32, CRC64, SHA1, SHA256, BLAKE2sp, *.
     * Default method is CRC32.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/scrc.htm
     */
    hashFunction?: string;
    /**
     * Sets charset for list files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/charset.htm
     */
    listFilesCharset?: string;
    /**
     * 7-Zip deletes files after including to archive.
     * So it works like moving files to archive.
     *
     * 7-Zip deletes files at the end of operation and only
     * if archive was successfully created.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sdel.htm
     */
    deleteFilesAfterArchiving?: boolean;
    /**
     * Sends an archive by e-mail.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/email.htm
     */
    sendArchiveByEmail?: string;
    /**
     * Creates self extracting archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sfx.htm
     */
    createSFX?: boolean;
    /**
     * Causes 7-Zip to read data from stdin (standard input) instead of from disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdin.htm
     */
    stdIn?: boolean;
    /**
     * Enables Large Pages mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/large_pages.htm
     */
    largePagesMode?: boolean;
    /**
     * Sets technical mode for List command.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/list_tech.htm
     */
    showTechnicalInformation?: string;
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
     * Extract file as alternate stream, if there is ':' character in name
     *
     * More Information: None
     */
    extractFileAsAlternateStream?: boolean;
    /**
     * Replace ':' character to '_' character in paths of alternate streams
     *
     * More Information: None
     */
    replaceColonInAlternateStream?: boolean;
    /**
     * Store hard links as links (WIM and TAR formats only)
     *
     * More Information: None
     */
    storeHardLinksAsLinks?: boolean;
    /**
     * Store symbolic links as links (WIM and TAR formats only)
     *
     * More Information: None
     */
    storeSymbolicLinksAsLinks?: boolean;
    /**
     * Causes 7-Zip to write output data to stdout (standard output stream) instead of to a disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdout.htm
     */
    stdOut?: boolean;
    /**
     * Wildcard matching for file names
     *
     * More Information: None
     */
    disableWildcardMatching?: boolean;
    /**
     * Eliminate duplication of root folder for extract archive command
     *
     * More Information: None
     */
    eliminateDuplicateRootFolder?: boolean;
    /**
     * Use fully qualified file paths.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/spf.htm
     */
    fullyQualifiedFilePaths?: FullyQualityFilePaths;
    /**
     * Set case-sensitive mode.
     *
     * Default for Posix/Linux systems is true.
     * Default for Windows systems is false
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ssc.htm
     */
    caseSensitive?: boolean;
    /**
     * Compresses files open for writing by another applications.
     * If this switch is not set, 7-zip doesn't include such files to archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/shared.htm
     */
    compressOpenFiles?: boolean;
    /**
     * 7-Zip sets timestamp for archive file as timestamp from the most recently modified file in that archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stl.htm
     */
    setTimestampAsLatest?: boolean;
    /**
     * Set CPU thread affinity mask (hexadecimal number).
     *
     * More Information: None
     */
    cpuThreadAffinityMask?: string;
    /**
     * Exclude archive type
     *
     * More Information: None
     */
    excludeArchiveType?: string;
    /**
     * Specifies the type of archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/type.htm
     */
    type?: string;
    /**
     * Specifies how to update files in an archive and (or) how to create new archives.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/update.htm
     */
    update?: string;
    /**
     * Specifies volume sizes.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/volume.htm
     */
    createVolumes?: string;
    /**
     * Sets the working directory for the temporary base archive.
     * By default, 7-Zip builds a new base archive file in the same directory
     * as the old base archive file. By specifying this switch, you can set
     * the working directory where the temporary base archive file will be built.
     * After the temporary base archive file is built, it is copied over
     * the original archive; then, the temporary file is deleted.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/working_dir.htm
     */
    workingDirectory?: string;
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
