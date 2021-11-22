import { writeFileSync } from "fs";
import * as path from "path";
import { DataFile } from "../Data/DataFile";
import { ConstantsFile } from "../Utils/Constants";

export class Save {
  public static SaveDataInFile(data: DataFile): void {
    writeFileSync(
      path.resolve(ConstantsFile.DIR_PATH_DATA, `${data.owner}.json`),
      JSON.stringify(data, this.MapToJson)
    );
  }

  private static MapToJson(key: any, value: any): any {
    if (value instanceof Map) {
      return {
        DataType: "Map",
        ValueMap: Array.from(value.entries()),
      };
    }

    return value;
  }
}
