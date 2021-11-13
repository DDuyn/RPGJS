import Container from "typedi";
import { CharacterManager } from "../../../Character/Managers/CharacterManager";
import { DataFileUtils } from "../../../Save&Load/Data/DataFile";
import { Load } from "../../../Save&Load/Load/Load";
import { Save } from "../../../Save&Load/Save/Save";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";

const characterManager = Container.get<CharacterManager>(CharacterManager);
const dataFile = new DataFileUtils();

const ragnar = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);

dataFile.SetOwnerDataFile("David");
dataFile.SetCharacterDataFile([ragnar]);
Save.SaveDataInFile(dataFile.GetDataFile());
const d = Load.LoadDataFromFile("David");
const c = dataFile.ExtractCharacterDataFile(d);
console.log(c);

console.log(c[0].SkillManager.GetSkills());
