import { GenerateRandomLoot } from "../../Battle/Loot/Utils/GenerateRandomLoot";
import { DataFileUtils } from "../../Save&Load/Data/DataFile";
import { Save } from "../../Save&Load/Save/Save";
const loot = GenerateRandomLoot(1);
const dataFile = new DataFileUtils();

loot.GetLootWeapons().forEach((weapon) => console.log(weapon));

dataFile.SetOwnerDataFile("David");
dataFile.SetWeaponDataFile([...loot.GetLootWeapons()]);
Save.SaveDataInFile(dataFile.GetDataFile());
