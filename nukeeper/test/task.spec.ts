import * as tl from 'vsts-task-tool-lib';
import { execFile } from 'mz/child_process';
import { expect } from 'chai'
import * as fs from 'mz/fs';

describe('task', () => {
    it('downloads nukeeper', async () => {
        await execFile('dotnet', ['tool', 'install', 'nukeeper', '--version', '0.10.0', '--tool-path', '.']);
        expect(await fs.exists('nukeeper')).to.be.true;
    }).timeout(4000);
});