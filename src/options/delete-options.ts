import { Recurse } from './recurse';

export interface DeleteOptions {
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
     * Store NTFS alternate streams mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sns.htm
     */
    storeNTFSAlternateStreams?: boolean;
    /**
     * Specifies how to update files in an archive and (or) how to create new archives.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/update.htm
     */
    update?: string;
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
