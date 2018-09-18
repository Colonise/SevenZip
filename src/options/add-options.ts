import { FullyQualityFilePaths } from './fully-qualified-file-paths';
import { Recurse } from './recurse';

export interface AddOptions {
    /**
     * Specifies the wilcards, filenames or list-files to be included in the command.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
     */
    files?: string[];
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
    stdIn?: string;
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
}
