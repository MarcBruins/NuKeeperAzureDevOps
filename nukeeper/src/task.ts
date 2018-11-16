import { execFile } from "mz/child_process";
import * as path from 'path';
import * as tl from 'vsts-task-lib';

export async function execNuKeeper(args: string|string[]) {
    return execFile('dotnet', [path.join(__dirname, '..', 'bin', 'NuKeeper.dll')].concat(args));
}

export async function repo(dir: string, exec: (args: string[]) => Promise<[string, string]> = execNuKeeper) {
    let token = tl.getEndpointAuthorizationParameter("SystemVssConnection", "AccessToken", false);
    return exec(['repo', dir, token]);
}

repo(tl.cwd()).catch(err => tl.setResult(tl.TaskResult.Failed, err));