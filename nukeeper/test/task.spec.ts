import { expect } from 'chai'
import * as fs from 'mz/fs';
import { download, install } from '../src/task';
import * as tl from 'vsts-task-tool-lib';
import sinon = require('sinon');

describe('task', () => {
    it('downloads nukeeper', async () => {
        let location = await download();
        expect(await fs.exists(location)).to.be.true;
    }).timeout(4000);

    it ('moves nukeeper to the tool cache', async () => {
        let stub = sinon.stub(tl, 'cacheDir').withArgs('asdafasdf', 'nukeeper', '0.10.0');
        await install('asdafasdf');

        sinon.assert.called(stub);
    });
});