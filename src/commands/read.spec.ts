import { Expect, SetupFixture, Teardown, TeardownFixture, Test, TestFixture } from 'alsatian';
import * as fs from 'fs';
import * as path from 'path';
import { read, readPromise, readSync } from './read';

@TestFixture('Extract Tests')
export class ExtractTests {
    public outputFolderPath = '';
    public outputFilePath = '';
    public outputFileName = 'test.txt';
    public outputFileContents = 'test\r\n';
    public multipleOutputFileContents = 'test\r\ntest2\r\n';
    public password = 'test';

    @Test('read() should read empty zip')
    public read1() {
        read(
            'test-assets/empty.zip',
            {
                outputDirectory: this.outputFolderPath
            },
            (error, contents) => {
                Expect(contents).toEqual(new Uint16Array([]));
            }
        );
    }

    @Test('read() should read zip contents')
    public read2() {
        read('test-assets/no-password.zip', {}, (error, contents) => {
            Expect(contents.toString()).toBe(this.outputFileContents);
        });
    }

    @Test('read() should read password protected zip contents')
    public read3() {
        read(
            'test-assets/password.zip',
            {
                password: this.password
            },
            (error, contents) => {
                Expect(contents.toString()).toBe(this.outputFileContents);
            }
        );
    }

    @Test('read() should read multiple files from zip')
    public read4() {
        read(
            'test-assets/multiple.zip',
            {
                password: this.password
            },
            (error, contents) => {
                Expect(contents.toString()).toBe(this.multipleOutputFileContents);
            }
        );
    }

    @Test('read() should read a single file from from a zip containing multiple files')
    public read5() {
        read(
            'test-assets/multiple.zip',
            {
                password: this.password,
                files: ['test.txt']
            },
            (error, contents) => {
                Expect(contents.toString()).toBe(this.outputFileContents);
            }
        );
    }

    @Test('readSync() should read empty zip')
    public readSync1() {
        const contents = readSync('test-assets/empty.zip', {
            outputDirectory: this.outputFolderPath
        });

        Expect(contents).toEqual(new Uint16Array([]));
    }

    @Test('readSync() should read zip contents')
    public readSync2() {
        const contents = readSync('test-assets/no-password.zip');

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('readSync() should read password protected zip contents')
    public readSync3() {
        const contents = readSync('test-assets/password.zip', {
            password: this.password
        });

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('readSync() should read multiple files from zip')
    public readSync4() {
        const contents = readSync('test-assets/multiple.zip', {
            password: this.password
        });

        Expect(contents.toString()).toBe(this.multipleOutputFileContents);
    }

    @Test('readSync() should read a single file from from a zip containing multiple files')
    public readSync5() {
        const contents = readSync('test-assets/multiple.zip', {
            password: this.password,
            files: ['test.txt']
        });

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('readPromise() should read empty zip')
    public async readPromise1() {
        const contents = await readPromise('test-assets/empty.zip', {
            outputDirectory: this.outputFolderPath
        });

        Expect(contents).toEqual(new Uint16Array([]));
    }

    @Test('readPromise() should read zip contents')
    public async readPromise2() {
        const contents = await readPromise('test-assets/no-password.zip');

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('readPromise() should read password protected zip contents')
    public async readPromise3() {
        const contents = await readPromise('test-assets/password.zip', {
            password: this.password
        });

        Expect(contents.toString()).toBe(this.outputFileContents);
    }

    @Test('readPromise() should read multiple files from zip')
    public async readPromise4() {
        const contents = await readPromise('test-assets/multiple.zip', {
            password: this.password
        });

        Expect(contents.toString()).toBe(this.multipleOutputFileContents);
    }

    @Test('readPromise() should read a single file from from a zip containing multiple files')
    public async readPromise5() {
        const contents = await readPromise('test-assets/multiple.zip', {
            password: this.password,
            files: ['test.txt']
        });

        Expect(contents.toString()).toBe(this.outputFileContents);
    }
}
