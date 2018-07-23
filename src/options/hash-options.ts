import { Recurse } from './recurse';

export interface HashOptions {
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
     * Specifies the method of treating wildcards and filenames on the command line.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/recurse.htm
     */
    recurse?: Recurse;
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
     * Causes 7-Zip to read data from stdin (standard input) instead of from disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdin.htm
     */
    stdIn?: boolean;
    /**
     * Store NTFS alternate streams mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sns.htm
     */
    storeNTFSAlternateStreams?: boolean;
    /**
     * Compresses files open for writing by another applications.
     * If this switch is not set, 7-zip doesn't include such files to archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/shared.htm
     */
    compressOpenFiles?: boolean;
    /**
     * Specifies which filenames or wildcarded names must be excluded from the operation.
     * Multiple exclude switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/exclude.htm
     */
    exclude?: string;
}
