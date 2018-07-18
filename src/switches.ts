/**
 * A 7zip switch.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm
 */
export enum SevenZipSwitch {
    StopSwitches = '--',
    ShowDialog = '-ad',
    IncludeArchiveFilenames = '-ai',
    DisableArchiveNameParsing = '-an',
    OverwriteMode = '-ao',
    OverwriteModeOverwrite = '-aoa',
    OverwriteModeSkip = '-aos',
    OverwriteModeRenameExtracted = '-aou',
    OverwriteModeRenameExisting = '-aot',
    ExcludeArchiveFileNames = '-ax',
    OutputLogLevel = '-bb',
    OutputStream = '-bs',
    ShowExecutionTimeStatistics = '-bt',
    IncludeFileNames = '-i',
    CompressionMethod = '-m',
    OutputDirectory = '-o',
    Password = '-p',
    RecursiveSubdirectories = '-r',
    ArchiveNameMode = '-sa',
    ConsoleCharset = '-scc',
    HashFunction = '-scrc',
    ListFilesCharset = '-scs',
    DeleteFilesAfterIncludingToArchive = '-sdel',
    SendArchiveByEmail = '-seml',
    CreateSFXArchive = '-sfx',
    ReadDataFromStdIn = '-si',
    LargePagesMode = '-slp',
    ShowTechnicalInformation = '-slt',
    StoreNTSecurityInformation = '-sni',
    StoreNTFSAlternateStreams = '-sns',
    ExtractFileAsAlternateStream = '-snr',
    StoreHardLinksAsLinks = '-snh',
    StoreSymbolicLinksAsLinks = '-snl',
    WriteDataToStdOut = '-so',
    DisableFileNameWildcardMatching = '-spd',
    EliminateDuplicateRootFolder = '-spe',
    FullyQualifiedFilePaths = '-spf',
    SensitiveCaseMode = '-ssc',
    CompressFilesOpenForWriting = '-ssw',
    TimestampAsMostRecentModifiedFile = '-stl',
    CPUThreadAffinityMask = '-stm',
    ExcludeArchiveType = '-stx',
    ArchiveType = '-t',
    UpdateOptions = '-u',
    CreateVolumes = '-v',
    WorkingDirectory = '-w',
    ExcludeFileNames = '-x',
    AssumeYesOnAllQueries = '-y'
}

/**
 * A 7zip switch with an option.
 */
export interface SevenZipSwitchWithOption {
    type: SevenZipSwitch;
    option: string;
}

export type SevenZipWildcard = '*';
export type SevenZipFileName = string;
export type SevenZipListFile = string;
export type SevenZipArgument = SevenZipSwitch | SevenZipWildcard | SevenZipFileName | SevenZipListFile;

export type SevenZipOverwriteOption =
    | SevenZipSwitch.OverwriteModeOverwrite
    | SevenZipSwitch.OverwriteModeRenameExisting
    | SevenZipSwitch.OverwriteModeRenameExtracted
    | SevenZipSwitch.OverwriteModeSkip;
