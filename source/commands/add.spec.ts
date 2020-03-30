// import { AsyncTest, Expect, FocusTest, SetupFixture, Teardown, TeardownFixture, Test, TestFixture } from 'alsatian';
// import { ChildProcess } from 'child_process';
// import * as fs from 'fs';
// import * as path from 'path';
// import { add } from './add';
// import { readSync } from './read';

// @TestFixture('Add Tests')
// export class AddTests {
//     public outputFolderPath = '';
//     public outputFilePath = '';
//     public outputFileName = 'test.zip';
//     public inputFileName = 'test.txt';
//     public inputFileContents = 'test\r\n';
//     public password = 'test';

//     @SetupFixture
//     public setupFixture() {
//         this.outputFolderPath = fs.mkdtempSync('test-output');
//         this.outputFilePath = path.join(this.outputFolderPath, this.outputFileName);
//     }

//     @TeardownFixture
//     public teardownFixture() {
//         if (fs.existsSync(this.outputFolderPath) && fs.readdirSync(this.outputFolderPath).length === 0) {
//             fs.rmdirSync(this.outputFolderPath);
//         }
//     }

//     @Teardown
//     public teardown() {
//         if (fs.existsSync(this.outputFilePath)) {
//             fs.unlinkSync(this.outputFilePath);
//         }
//     }

//     @AsyncTest('should add file to zip through stdin')
//     public async add1() {
//         const addChildProcess = add(this.outputFilePath, {
//             stdIn: this.inputFileName
//         });

//         addChildProcess.stdin.write(this.inputFileContents);
//         addChildProcess.stdin.end();

//         await this.promisifyChildProcess(addChildProcess);

//         Expect(fs.existsSync(this.outputFilePath)).toBe(true);
//         Expect(readSync(this.outputFilePath, { files: [this.inputFileName] }).toString()).toBe(this.inputFileContents);
//     }

//     @AsyncTest('should add file to password protected zip through stdin')
//     public async add2() {
//         const addChildProcess = add(this.outputFilePath, {
//             stdIn: this.inputFileName,
//             password: this.password
//         });

//         addChildProcess.stdin.write(this.inputFileContents);
//         addChildProcess.stdin.end();

//         await this.promisifyChildProcess(addChildProcess);

//         Expect(fs.existsSync(this.outputFilePath)).toBe(true);
//         Expect(readSync(this.outputFilePath, { password: this.password, files: [this.inputFileName] }).toString()).toBe(
//             this.inputFileContents
//         );
//     }

//     private promisifyChildProcess(childProcess: ChildProcess) {
//         return new Promise((resolve, reject) => {
//             childProcess.on('close', resolve).on('error', reject);
//         });
//     }
// }
