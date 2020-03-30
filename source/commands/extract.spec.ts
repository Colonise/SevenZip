// import { Expect, SetupFixture, Teardown, TeardownFixture, Test, TestFixture } from 'alsatian';
// import * as fs from 'fs';
// import * as path from 'path';
// import { extractSync } from './extract';

// @TestFixture('Extract Tests')
// export class ExtractTests {
//     public outputFolderPath = '';
//     public outputFilePath = '';
//     public outputFile2Path = '';
//     public outputFileName = 'test.txt';
//     public outputFile2Name = 'test2.txt';
//     public outputFileContents = 'test\r\n';
//     public outputFile2Contents = 'test2\r\n';
//     public password = 'test';

//     @SetupFixture
//     public setupFixture() {
//         this.outputFolderPath = fs.mkdtempSync('test-output');
//         this.outputFilePath = path.join(this.outputFolderPath, this.outputFileName);
//         this.outputFile2Path = path.join(this.outputFolderPath, this.outputFile2Name);
//     }

//     @TeardownFixture
//     public teardownFixture() {
//         if (fs.existsSync(this.outputFolderPath)) {
//             fs.rmdirSync(this.outputFolderPath);
//         }
//     }

//     @Teardown
//     public teardown() {
//         if (fs.existsSync(this.outputFilePath)) {
//             fs.unlinkSync(this.outputFilePath);
//         }

//         if (fs.existsSync(this.outputFile2Path)) {
//             fs.unlinkSync(this.outputFile2Path);
//         }
//     }

//     @Test('should extract empty zip')
//     public extract1() {
//         extractSync('test-assets/empty.zip', {
//             outputDirectory: this.outputFolderPath
//         });

//         Expect(fs.existsSync(this.outputFilePath)).toBe(false);
//     }

//     @Test('should extract zip contents')
//     public extract2() {
//         extractSync('test-assets/no-password.zip', {
//             outputDirectory: this.outputFolderPath
//         });

//         Expect(fs.existsSync(this.outputFilePath)).toBe(true);
//         Expect(fs.readFileSync(this.outputFilePath, { encoding: 'utf8' })).toBe(this.outputFileContents);
//     }

//     @Test('should extract password protected zip contents')
//     public extract3() {
//         extractSync('test-assets/password.zip', {
//             outputDirectory: this.outputFolderPath,
//             password: this.password
//         });

//         Expect(fs.existsSync(this.outputFilePath)).toBe(true);
//         Expect(fs.readFileSync(this.outputFilePath, { encoding: 'utf8' })).toBe(this.outputFileContents);
//     }

//     @Test('should extract multiple files from zip')
//     public extract4() {
//         extractSync('test-assets/multiple.zip', {
//             outputDirectory: this.outputFolderPath
//         });

//         Expect(fs.existsSync(this.outputFilePath)).toBe(true);
//         Expect(fs.readFileSync(this.outputFilePath, { encoding: 'utf8' })).toBe(this.outputFileContents);
//         Expect(fs.existsSync(this.outputFile2Path)).toBe(true);
//         Expect(fs.readFileSync(this.outputFile2Path, { encoding: 'utf8' })).toBe(this.outputFile2Contents);
//     }
// }
