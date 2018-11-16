import { expect } from 'chai';
import { execNuKeeper, repo } from '../src/task';
import * as task from '../src/task'
import * as sinon from 'sinon';
import * as tl from 'vsts-task-lib';

describe('repo', () => {
    afterEach(() => {
        sinon.resetBehavior();
    });

    it ('invokes dotnet with the nukeeper assembly', async () => {
        let result = await execNuKeeper('--version');
        expect(result[0]).to.match(/0\.10\.0/);
    });

    it ('invoked repo command with uri and access token', async () => {
        let stub = sinon.stub(tl, 'getEndpointAuthorizationParameter').returns('asdflk;ajsdfl;kjasdf');
        await repo(__dirname, (_) => { return Promise.resolve([''][''])});

        sinon.assert.called(stub);      
    });
});