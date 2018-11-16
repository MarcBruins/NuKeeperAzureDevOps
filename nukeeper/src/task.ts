import { execFile } from "mz/child_process";
import * as path from 'path';

export async function execNuKeeper(args: string|string[]) {
    return execFile('dotnet', [path.join(__dirname, '..', 'bin', 'NuKeeper.dll')].concat(args));
}