import { execFile, spawn } from "mz/child_process";
import * as path from 'path';
import { expect } from 'chai';
import { execNuKeeper } from '../src/task';

describe('repo', () => {
    it ('invokes dotnet with the nukeeper assembly', async () => {
        let result = await execNuKeeper('--version');
        expect(result[0]).to.match(/0\.10\.0/);
    });
});