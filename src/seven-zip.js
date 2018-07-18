"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
var fs = require("fs");
var path = require("path");
/**
 * A 7zip command.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/commands/index.htm
 */
var SevenZipCommand;
(function (SevenZipCommand) {
    SevenZipCommand["Add"] = "a";
    SevenZipCommand["Benchmark"] = "b";
    SevenZipCommand["Delete"] = "d";
    SevenZipCommand["Extract"] = "e";
    SevenZipCommand["Hash"] = "h";
    SevenZipCommand["Information"] = "i";
    SevenZipCommand["List"] = "l";
    SevenZipCommand["Rename"] = "rn";
    SevenZipCommand["Test"] = "t";
    SevenZipCommand["Update"] = "u";
    SevenZipCommand["ExtractWithFullPaths"] = "x";
})(SevenZipCommand = exports.SevenZipCommand || (exports.SevenZipCommand = {}));
/**
 * A 7zip switch.
 *
 * Based off https://sevenzip.osdn.jp/chm/cmdline/switches/index.htm
 */
var SevenZipSwitchType;
(function (SevenZipSwitchType) {
    SevenZipSwitchType["StopSwitches"] = "--";
    SevenZipSwitchType["ShowDialog"] = "-ad";
    SevenZipSwitchType["IncludeArchiveFilenames"] = "-ai";
    SevenZipSwitchType["DisableArchiveNameParsing"] = "-an";
    SevenZipSwitchType["OverwriteMode"] = "-ao";
    SevenZipSwitchType["OverwriteModeOverwrite"] = "-aoa";
    SevenZipSwitchType["OverwriteModeSkip"] = "-aos";
    SevenZipSwitchType["OverwriteModeRenameExtracted"] = "-aou";
    SevenZipSwitchType["OverwriteModeRenameExisting"] = "-aot";
    SevenZipSwitchType["ExcludeArchiveFileNames"] = "-ax";
    SevenZipSwitchType["OutputLogLevel"] = "-bb";
    SevenZipSwitchType["OutputStream"] = "-bs";
    SevenZipSwitchType["ShowExecutionTimeStatistics"] = "-bt";
    SevenZipSwitchType["IncludeFileNames"] = "-i";
    SevenZipSwitchType["CompressionMethod"] = "-m";
    SevenZipSwitchType["OutputDirectory"] = "-o";
    SevenZipSwitchType["Password"] = "-p";
    SevenZipSwitchType["RecursiveSubdirectories"] = "-r";
    SevenZipSwitchType["ArchiveNameMode"] = "-sa";
    SevenZipSwitchType["ConsoleCharset"] = "-scc";
    SevenZipSwitchType["HashFunction"] = "-scrc";
    SevenZipSwitchType["ListFilesCharset"] = "-scs";
    SevenZipSwitchType["DeleteFilesAfterIncludingToArchive"] = "-sdel";
    SevenZipSwitchType["SendArchiveByEmail"] = "-seml";
    SevenZipSwitchType["CreateSFXArchive"] = "-sfx";
    SevenZipSwitchType["ReadDataFromStdIn"] = "-si";
    SevenZipSwitchType["LargePagesMode"] = "-slp";
    SevenZipSwitchType["ShowTechnicalInformation"] = "-slt";
    SevenZipSwitchType["StoreNTSecurityInformation"] = "-sni";
    SevenZipSwitchType["StoreNTFSAlternateStreams"] = "-sns";
    SevenZipSwitchType["ExtractFileAsAlternateStream"] = "-snr";
    SevenZipSwitchType["StoreHardLinksAsLinks"] = "-snh";
    SevenZipSwitchType["StoreSymbolicLinksAsLinks"] = "-snl";
    SevenZipSwitchType["WriteDataToStdOut"] = "-so";
    SevenZipSwitchType["DisableFileNameWildcardMatching"] = "-spd";
    SevenZipSwitchType["EliminateDuplicateRootFolder"] = "-spe";
    SevenZipSwitchType["FullyQualifiedFilePaths"] = "-spf";
    SevenZipSwitchType["SensitiveCaseMode"] = "-ssc";
    SevenZipSwitchType["CompressFilesOpenForWriting"] = "-ssw";
    SevenZipSwitchType["TimestampAsMostRecentModifiedFile"] = "-stl";
    SevenZipSwitchType["CPUThreadAffinityMask"] = "-stm";
    SevenZipSwitchType["ExcludeArchiveType"] = "-stx";
    SevenZipSwitchType["ArchiveType"] = "-t";
    SevenZipSwitchType["UpdateOptions"] = "-u";
    SevenZipSwitchType["CreateVolumes"] = "-v";
    SevenZipSwitchType["WorkingDirectory"] = "-w";
    SevenZipSwitchType["ExcludeFileNames"] = "-x";
    SevenZipSwitchType["AssumeYesOnAllQueries"] = "-y";
})(SevenZipSwitchType = exports.SevenZipSwitchType || (exports.SevenZipSwitchType = {}));
var SevenZip = /** @class */ (function () {
    function SevenZip() {
    }
    SevenZip.add = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Add, archive, args);
    };
    SevenZip.benchmark = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Benchmark, archive, args);
    };
    SevenZip.delete = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Delete, archive, args);
    };
    SevenZip.extract = function (archive, fullPaths, args) {
        if (fullPaths === void 0) { fullPaths = false; }
        if (args === void 0) { args = []; }
        return SevenZip.exec(fullPaths ? SevenZipCommand.ExtractWithFullPaths : SevenZipCommand.Extract, archive, args);
    };
    SevenZip.hash = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Hash, archive, args);
    };
    SevenZip.info = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Information, archive, args);
    };
    SevenZip.list = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.List, archive, args);
    };
    SevenZip.rename = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Rename, archive, args);
    };
    SevenZip.test = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Test, archive, args);
    };
    SevenZip.update = function (archive, args) {
        if (args === void 0) { args = []; }
        return SevenZip.exec(SevenZipCommand.Update, archive, args);
    };
    /**
     * Executes a 7zip command.
     *
     * Based off: https://sevenzip.osdn.jp/chm/cmdline/syntax.htm
     *
     * @param command
     * @param archive
     * @param switches
     * @param args
     */
    SevenZip.exec = function (command, archive, args
    // switches: SevenZipSwitch[] = [],
    ) {
        // const stringifySwitches = SevenZip.stringifySwitches(switches);
        if (args === void 0) { args = []; }
        if (!archive || !fs.existsSync(archive)) {
            throw new Error("Cannot find file \"" + archive + "\"");
        }
        var stringifyArguments = Array.isArray(args)
            ? SevenZip.stringifyArguments(args)
            : SevenZip.parseOptions(args);
        return child_process.execSync("7za " + command + " \"" + archive + "\" " + stringifyArguments);
    };
    SevenZip.stringifySwitch = function (sevenZipSwitch) {
        return typeof sevenZipSwitch === 'string' ? sevenZipSwitch : sevenZipSwitch.type + "\"" + sevenZipSwitch.option + "\"";
    };
    SevenZip.stringifySwitches = function (switches) {
        var result = [];
        switches.forEach(function (sevenZipSwitch) { return result.push(SevenZip.stringifySwitch(sevenZipSwitch)); });
        return result.join(' ');
    };
    SevenZip.stringifyArguments = function (args) {
        var result = [];
        args.forEach(function (sevenZipArgument) { return result.push(SevenZip.stringifySwitch(sevenZipArgument)); });
        return result.join(' ');
    };
    SevenZip.parseOptions = function (options) {
        var result = [];
        Object.keys(options).forEach(function (k) {
            var key = k;
            var option = options[key];
            var sevenZipSwitch;
            switch (key) {
                case 'overwriteMode':
                    sevenZipSwitch = option;
                    break;
                default:
                    if (options[key]) {
                        sevenZipSwitch = {
                            type: SevenZip.optionDictionary[key],
                            option: options[key]
                        };
                    }
            }
            if (sevenZipSwitch) {
                result.push(SevenZip.stringifySwitch(sevenZipSwitch));
            }
        });
        return result.join(' ');
    };
    SevenZip.sevenZipExecutableLocation = path.join(__dirname, '../');
    SevenZip.optionDictionary = {
        outputDirectory: SevenZipSwitchType.OutputDirectory,
        password: SevenZipSwitchType.Password
    };
    return SevenZip;
}());
exports.SevenZip = SevenZip;
//# sourceMappingURL=seven-zip.js.map