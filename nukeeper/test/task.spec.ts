import { execFile, spawn } from "mz/child_process";
import * as path from 'path';
import { expect } from 'chai';

describe('repo', () => {
    it ('invokes dotnet with the nukeeper assembly', async () => {
        let result = await execFile('dotnet', [path.join(__dirname, '..', 'bin', 'NuKeeper.dll'), '--version']);
        expect(result[0]).to.match(/0\.10\.0/);
    });
});