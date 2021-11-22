import { Warrior } from "../../../Character/Model/Warrior/Warrior";
import { DataFileUtils } from "../../../Save&Load/Data/DataFile";
import { Load } from "../../../Save&Load/Load/Load";
import { Save } from "../../../Save&Load/Save/Save";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { LocationWeapon } from "../../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { CopperSword } from "../../../Weapons/OneHandedSword/CopperSword";

const warrior = new Warrior("Ragnar", CharacterType.PLAYER);

console.log(warrior.GetData().Name, warrior.GetData().Attributes);
console.log(warrior.GetData().Name, warrior.GetData().Skills);

const weapon = new CopperSword(1, Rarity.COMMON);

warrior.EquipWeapon(weapon, LocationWeapon.OFF_HAND);
console.log(warrior.GetData().Weapons);

const dataFile = new DataFileUtils();
dataFile.SetOwnerDataFile("David");
dataFile.SetCharacterDataFile([warrior]);
Save.SaveDataInFile(dataFile.GetDataFile());
const c = Load.LoadDataFromFile("David");
const l = dataFile.ExtractCharacterDataFile(c);
console.log(l[0].GetData());
