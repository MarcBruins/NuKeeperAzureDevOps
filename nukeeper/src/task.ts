import { execFile } from "mz/child_process";
import * as path from 'path';
import * as tl from 'vsts-task-lib';
import * as ttl from 'vsts-task-tool-lib'
import { fs } from "mz";

export async function execNuKeeper(args: string|string[]) {
    await ttl.extractZip(path.join(__dirname, '..', 'bin.zip'), path.resolve(__dirname, '..'));
    return execFile('dotnet', [path.join(__dirname, '..', 'bin', 'NuKeeper.dll')].concat(args));
}

export async function repo(dir: string, exec: (args: string[]) => Promise<[string, string]> = execNuKeeper) {
    let token = tl.getEndpointAuthorizationParameter("SystemVssConnection", "AccessToken", false);
    return exec(['repo', dir, token]);
}

repo(tl.cwd()).catch(err => tl.setResult(tl.TaskResult.Failed, err));