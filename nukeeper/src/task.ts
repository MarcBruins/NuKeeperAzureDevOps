import { execFile } from "mz/child_process";
import * as tmp from 'tempy';

export async function install(): Promise<string> {
    let dir = await tmp.directory();
    await execFile('dotnet', ['tool', 'install', 'nukeeper', '--version', '0.10.0', '--tool-path', dir]);
    return dir;
}

