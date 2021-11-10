import { readFileSync } from "fs";
import * as path from "path";
import { DataFile } from "../Data/DataFile";
import { ConstantsFile } from "../Utils/Constants";

export class Load {
  public static LoadDataFromFile(owner: string): DataFile {
    return JSON.parse(
      readFileSync(
        path.resolve(ConstantsFile.DIR_PATH_DATA, `${owner}.json`),
        "utf-8"
      )
    );
  }
}
