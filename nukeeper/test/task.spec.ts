import { expect } from 'chai'
import * as fs from 'mz/fs';
import { install } from '../src/task';

describe('task', () => {
    it('downloads nukeeper', async () => {
        let location = await install();
        expect(await fs.exists(location)).to.be.true;
    }).timeout(4000);
});