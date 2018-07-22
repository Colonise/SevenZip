/**
 * A 7zip switch.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm
 */
export enum Switch {
    /**
     * Disables switch parsing after "--" on the command line.
     * This is to allow 7-Zip to use file names that start with "-".
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stop_switch.htm
     */
    DisableSwitches = '--',
    /**
     * Show dialog box in GUI version (7zg)
     *
     * More Information: None
     */
    ShowDialog = '-ad',
    /**
     * Specifies additional include archive filenames and wildcards.
     * Multiple include switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ar_include.htm
     */
    IncludeArchives = '-ai',
    /**
     * Disables parsing of the archive_name field on the command line.
     * This switch must be used with the Include Archives switch.
     * If you use a file list for your archives, you specify it with the
     * Include Archives switch, so you need to disable parsing of archive_name
     * field from command line.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ar_no.htm
     */
    DisableArchiveNameParsing = '-an',
    /**
     * Specifies the overwrite mode during extraction, to overwrite files already present on disk.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/overwrite.htm
     */
    OverwriteMode = '-ao',
    /**
     * Overwrite All existing files without prompt.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/overwrite.htm
     */
    OverwriteModeOverwrite = '-aoa',
    /**
     * Skip extracting of existing files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/overwrite.htm
     */
    OverwriteModeSkip = '-aos',
    /**
     * Automatically rename extracting file (for example, name.txt will be renamed to name_1.txt).
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/overwrite.htm
     */
    OverwriteModeRenameExtracted = '-aou',
    /**
     * Automatically rename existing file (for example, name.txt will be renamed to name_1.txt).
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/overwrite.htm
     */
    OverwriteModeRenameExisting = '-aot',
    /**
     * Specifies archives to be excluded from the operation.
     * Multiple exclude archive switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ar_exclude.htm
     */
    ExcludeArchives = '-ax',
    /**
     * The switch sets output log level for Delete/Add/Update/Extract operations.
     *
     * Show names of processed files in log.
     *
     * Alias for LogLevelProcessedFiles.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bb.htm
     */
    LogLevel = '-bb',
    /**
     * The switch sets output log level for Delete/Add/Update/Extract operations.
     *
     * Disable log (default).
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bb.htm
     */
    DisableLog = '-bb0',
    /**
     * The switch sets output log level for Delete/Add/Update/Extract operations.
     *
     * Show names of processed files in log.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bb.htm
     */
    LogProcessedFiles = '-bb1',
    /**
     * The switch sets output log level for Delete/Add/Update/Extract operations.
     *
     * show names of additional files that were processed internally in solid
     * archives: skipped files for "Extract" operation, repacked files for
     * "Add" / "Update" operations.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bb.htm
     */
    LogInternallyProcessedFiles = '-bb2',
    /**
     * The switch sets output log level for Delete/Add/Update/Extract operations.
     *
     * Show information about additional operations (Analyze, Replicate) for "Add" / "Update" operations.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/bb.htm
     */
    LogAdditionalOperations = '-bb3',
    /**
     * Disable progress indicator
     *
     * More Information: None
     */
    DisableProgress = '-bd',
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
    OutputStream = '-bs',
    /**
     * Show execution time statistics
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm
     */
    ShowExecutionTimeStatistics = '-bt',
    /**
     * Specifies additional include filenames and wildcards.
     * Multiple include switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/include.htm
     */
    Include = '-i',
    /**
     * Specifies the compression method.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/method.htm
     */
    Method = '-m',
    /**
     * Specifies a destination directory where files are to be extracted.
     * his switch can be used only with extraction commands.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/output_dir.htm
     */
    OutputDirectory = '-o',
    /**
     * Specifies password.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/password.htm
     */
    Password = '-p',
    /**
     * Specifies the method of treating wildcards and filenames on the command line.
     *
     * Enable recurse subdirectories.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/recurse.htm
     */
    EnableRecurse = '-r',
    /**
     * Specifies the method of treating wildcards and filenames on the command line.
     *
     * Disable recurse subdirectories. This option is default for all commands.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/recurse.htm
     */
    DisableRecurse = '-r-',
    /**
     * Specifies the method of treating wildcards and filenames on the command line.
     *
     * Enable recurse subdirectories only for wildcard names.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/recurse.htm
     */
    RecurseWilcardOnly = '-r0',
    /**
     * Specifies Archive name mode.
     *
     * Add extension only if specified name has no extension. It's default option.
     *
     * Alias for ArchiveNameModeEnsureExtension
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sa.htm
     */
    ArchiveNameMode = '-sa',
    /**
     * Specifies Archive name mode.
     *
     * Always add archive type extension.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sa.htm
     */
    ArchiveNameModeAdd = '-saa',
    /**
     * Specifies Archive name mode.
     *
     * Use exact name specified in command.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sa.htm
     */
    ArchiveNameModeExact = '-sae',
    /**
     * Specifies Archive name mode.
     *
     * Add extension only if specified name has no extension. It's default option.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sa.htm
     */
    ArchiveNameModeEnsureExtension = '-sas',
    /**
     * Set charset for for console input/output
     *
     * More Information: None
     */
    ConsoleCharset = '-scc',
    /**
     * Sets hash function for "extract" and "hash" commands.
     *
     * Supported methods: CRC32, CRC64, SHA1, SHA256, BLAKE2sp, *.
     * Default method is CRC32.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/scrc.htm
     */
    HashFunction = '-scrc',
    /**
     * Sets charset for list files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/charset.htm
     */
    ListFilesCharset = '-scs',
    /**
     * 7-Zip deletes files after including to archive.
     * So it works like moving files to archive.
     *
     * 7-Zip deletes files at the end of operation and only
     * if archive was successfully created.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sdel.htm
     */
    DeleteFilesAfterArchiving = '-sdel',
    /**
     * Sends an archive by e-mail.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/email.htm
     */
    SendArchiveByEmail = '-seml',
    /**
     * Creates self extracting archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sfx.htm
     */
    CreateSFX = '-sfx',
    /**
     * Causes 7-Zip to read data from stdin (standard input) instead of from disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdin.htm
     */
    StdIn = '-si',
    /**
     * Enables Large Pages mode.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/large_pages.htm
     */
    LargePagesMode = '-slp',
    /**
     * Disables Large Pages mode. This option is default for all commands.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/large_pages.htm
     */
    DisableLargePagesMode = '-slp-',
    /**
     * Sets technical mode for List command.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/list_tech.htm
     */
    ShowTechnicalInformation = '-slt',
    /**
     * Use this switch to store and restore NT (NTFS) security information for files and directories.
     * Note that only NTFS file system supports that feature.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sni.htm
     */
    StoreNTSecurityInformation = '-sni',
    /**
     * Enable "Store NTFS alternate streams" mode.
     * It's default option, if you extract archive.
     *
     * 7-Zip processes NTFS Alternate Data Streams for files and folders.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sns.htm
     */
    StoreNTFSAlternateStreams = '-sns',
    /**
     * Disable "Store NTFS alternate streams" mode.
     * It's default option, if you create archive or call "list" command.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/sns.htm
     */
    DisableStoreNTFSAlternateStreams = '-sns',
    /**
     * Extract file as alternate stream, if there is ':' character in name
     *
     * More Information: None
     */
    ExtractFileAsAlternateStream = '-snc',
    /**
     * Replace ':' character to '_' character in paths of alternate streams
     *
     * More Information: None
     */
    ReplaceColonInAlternateStream = '-snr',
    /**
     * Store hard links as links (WIM and TAR formats only)
     *
     * More Information: None
     */
    StoreHardLinksAsLinks = '-snh',
    /**
     * Store symbolic links as links (WIM and TAR formats only)
     *
     * More Information: None
     */
    StoreSymbolicLinksAsLinks = '-snl',
    /**
     * Causes 7-Zip to write output data to stdout (standard output stream) instead of to a disc files.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stdout.htm
     */
    StdOut = '-so',
    /**
     * Disable wildcard matching for file names
     *
     * More Information: None
     */
    DisableWildcardMatching = '-spd',
    /**
     * Eliminate duplication of root folder for extract archive command
     *
     * More Information: None
     */
    EliminateDuplicateRootFolder = '-spe',
    /**
     * Use absolute paths including drive letter.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/spf.htm
     */
    FullyQualifiedFilePaths = '-spf',
    /**
     * Use full paths without drive letter.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/spf.htm
     */
    RelativeFullyQualifiedFilePaths = '-spf2',
    /**
     * Set case-sensitive mode.
     * It's default for Posix/Linux systems.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ssc.htm
     */
    CaseSensitive = '-ssc',
    /**
     * Set case-insensitive mode.
     * It's default for Windows systems.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/ssc.htm
     */
    CaseInsensitive = '-ssc-',
    /**
     * Compresses files open for writing by another applications.
     * If this switch is not set, 7-zip doesn't include such files to archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/shared.htm
     */
    CompressOpenFiles = '-ssw',
    /**
     * 7-Zip sets timestamp for archive file as timestamp from the most recently modified file in that archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/stl.htm
     */
    SetTimestampAsLatest = '-stl',
    /**
     * Set CPU thread affinity mask (hexadecimal number).
     *
     * More Information: None
     */
    CPUThreadAffinityMask = '-stm',
    /**
     * Exclude archive type
     *
     * More Information: None
     */
    ExcludeArchiveType = '-stx',
    /**
     * Specifies the type of archive.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/type.htm
     */
    Type = '-t',
    /**
     * Specifies how to update files in an archive and (or) how to create new archives.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/update.htm
     */
    Updates = '-u',
    /**
     * Specifies volume sizes.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/volume.htm
     */
    CreateVolumes = '-v',
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
    WorkingDirectory = '-w',
    /**
     * Specifies which filenames or wildcarded names must be excluded from the operation.
     * Multiple exclude switches are supported.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/exclude.htm
     */
    Exclude = '-x',
    /**
     * Disables most of the normal user queries during 7-Zip execution.
     * You can use this switch to suppress overwrite queries in the Extract and Extract with full paths commands.
     *
     * More Information: https://sevenzip.osdn.jp/chm/cmdline/switches/yes.htm
     */
    DisableQueries = '-y'
}
