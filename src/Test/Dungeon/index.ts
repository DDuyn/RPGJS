import { Cave } from "../../Dungeon/Cave/Cave";
import { DataFileUtils } from "../../Save&Load/Data/DataFile";
import { Load } from "../../Save&Load/Load/Load";
import { Save } from "../../Save&Load/Save/Save";

const cave = new Cave();
console.log(cave.GetData());
cave.GenerateDungeon();

const dataFile = new DataFileUtils();
dataFile.SetOwnerDataFile("David");
dataFile.SetDungeonDataFile([cave]);
Save.SaveDataInFile(dataFile.GetDataFile());
const c = Load.LoadDataFromFile("David");
