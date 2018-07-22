import { Expect, SetupFixture, Teardown, TeardownFixture, Test, TestFixture } from 'alsatian';
import * as fs from 'fs';
import * as path from 'path';
import * as SevenZip from './seven-zip';

@TestFixture('SevenZip Tests')
export class SevenZipTests {
    public outputFolderPath = '';
    public outputFilePath = '';
    public outputFileName = 'test.txt';
    public outputFileContents = 'test\r\n';
    public password = 'test';

    @SetupFixture
    public setupFixture() {
        this.outputFolderPath = fs.mkdtempSync('test-output');
        this.outputFilePath = path.join(this.outputFolderPath, this.outputFileName);
    }

    @TeardownFixture
    public teardownFixture() {
        if (fs.existsSync(this.outputFolderPath)) {
            fs.rmdirSync(this.outputFolderPath);
        }
    }

    @Teardown
    public teardown() {
        if (fs.existsSync(this.outputFilePath)) {
            fs.unlinkSync(this.outputFilePath);
        }
    }

    @Test('should extract empty zip')
    public extract1() {
        SevenZip.extractSync('test-assets/empty.zip', true, {
            outputDirectory: this.outputFolderPath
        });

        Expect(fs.existsSync(this.outputFilePath)).toBe(false);
    }

    @Test('should extract zip contents')
    public extract2() {
        SevenZip.extractSync('test-assets/no-password.zip', true, {
            outputDirectory: this.outputFolderPath
        });

        Expect(fs.existsSync(this.outputFilePath)).toBe(true);
        Expect(fs.readFileSync(this.outputFilePath, { encoding: 'utf8' })).toBe(this.outputFileContents);
    }

    @Test('should extract password protected zip contents')
    public extract3() {
        SevenZip.extractSync('test-assets/password.zip', true, {
            outputDirectory: this.outputFolderPath,
            password: this.password
        });

        Expect(fs.existsSync(this.outputFilePath)).toBe(true);
        Expect(fs.readFileSync(this.outputFilePath, { encoding: 'utf8' })).toBe(this.outputFileContents);
    }
}
