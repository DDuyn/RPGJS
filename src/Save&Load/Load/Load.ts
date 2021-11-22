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
      ),
      this.JsonToMap
    );
  }

  private static JsonToMap(key: any, value: any): any {
    if (typeof value === "object" && value !== null) {
      if (value.DataType === "Map") {
        return new Map(value.ValueMap);
      }
    }
    return value;
  }
}
