import { execFile } from "mz/child_process";
import * as tmp from 'tempy';
import * as tl from 'vsts-task-tool-lib';

const version = '0.10.0';
export async function download(): Promise<string> {
    let dir = await tmp.directory();
    await execFile('dotnet', ['tool', 'install', 'nukeeper', '--version', version, '--tool-path', dir]);
    return dir;
}

export async function install(path: string) {
    return tl.cacheDir(path, 'nukeeper', version);
}

