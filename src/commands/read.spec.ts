import { Expect, SetupFixture, Teardown, TeardownFixture, Test, TestFixture } from 'alsatian';
import * as fs from 'fs';
import * as path from 'path';
import { read, readSync } from './read';

@TestFixture('Extract Tests')
export class ExtractTests {
    public outputFolderPath = '';
    public outputFilePath = '';
    public outputFileName = 'test.txt';
    public outputFileContents = 'test\r\n';
    public multipleOutputFileContents = 'test\r\ntest2\r\n';
    public password = 'test';

    @Test('should read empty zip')
    public read1() {
        const contents = readSync('test-assets/empty.zip', {
            outputDirectory: this.outputFolderPath
        });

        Expect(contents).toEqual(new Uint16Array([]));
    }

    @Test('should read zip contents')
    public read2() {
        const contents = readSync('test-assets/no-password.zip');

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('should read password protected zip contents')
    public read3() {
        const contents = readSync('test-assets/password.zip', {
            password: this.password
        });

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('should read multiple files from zip')
    public read4() {
        const contents = readSync('test-assets/multiple.zip', {
            password: this.password
        });

        Expect(contents.toString()).toBe(this.multipleOutputFileContents);
    }

    @Test('should read a single file from from a zip containing multiple files')
    public read5() {
        const contents = readSync('test-assets/multiple.zip', {
            password: this.password,
            files: ['test.txt']
        });

        Expect(contents.toString()).toBe(this.outputFileContents);
    }
}
