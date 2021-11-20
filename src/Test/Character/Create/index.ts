import { Warrior } from "../../../Character/Model/Warrior/Warrior";
import { DataFileUtils } from "../../../Save&Load/Data/DataFile";
import { Load } from "../../../Save&Load/Load/Load";
import { Save } from "../../../Save&Load/Save/Save";
import { CharacterType } from "../../../Shared/Enums/CharacterType";

const warrior = new Warrior("Ragnar", CharacterType.PLAYER);

console.log(warrior.GetData().Name, warrior.GetData().Attributes);
console.log(warrior.GetData().Name, warrior.GetData().Skills);

const dataFile = new DataFileUtils();
dataFile.SetOwnerDataFile("David");
dataFile.SetCharacterDataFile([warrior]);
Save.SaveDataInFile(dataFile.GetDataFile());
const c = Load.LoadDataFromFile("David");
const l = dataFile.ExtractCharacterDataFile(c);
console.log(l[0].GetData().Name);
