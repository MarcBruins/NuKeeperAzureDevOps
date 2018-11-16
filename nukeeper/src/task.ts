import { execFile } from "mz/child_process";
import * as path from 'path';

export async function install(): Promise<string> {
    await execFile('dotnet', ['tool', 'install', 'nukeeper', '--version', '0.10.0', '--tool-path', __dirname]);
    return __dirname;
}

