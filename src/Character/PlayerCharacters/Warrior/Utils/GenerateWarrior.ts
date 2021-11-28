import { LIST_ATTRIBUTES } from "../../../../Attributes/Constants/ListAttributes";
import { IAttribute } from "../../../../Attributes/Interfaces/IAttribute";
import { BATTLE_ATTRIBUTE } from "../../../../Attributes/Models/Base/BattleAttributeModel";
import { LEVEL_ATTRIBUTE } from "../../../../Attributes/Models/Base/LevelAttributeModel";
import { PRIMARY_ATTRIBUTE } from "../../../../Attributes/Models/Base/PrimaryAttributeModel";
import { Utils } from "../../../../Shared/Utils/Utils";
import {
  GenerateBaseBattleAttributes,
  GenerateBaseLevelAttributes,
  GenerateBasePrimaryAttributes,
} from "../../../Utils/GenerateCharacter";

export const GenerateWarrior = (): IAttribute[] => {
  GeneratePrimaryAttributes();
  GenerateBattleAttributes();
  GenerateLevelAttributes();
  return Object.values(LIST_ATTRIBUTES);
};

const GeneratePrimaryAttributes = (): void => {
  const BASE_PRIMARY_ATTRIBUTE: PRIMARY_ATTRIBUTE = {
    Strength: Utils.Random(40, 60),
    Dextery: Utils.Random(15, 25),
    Intelligence: Utils.Random(5, 15),
    MaxHealth: Utils.Random(250, 450),
  };

  GenerateBasePrimaryAttributes(BASE_PRIMARY_ATTRIBUTE);
};

const GenerateBattleAttributes = (): void => {
  const BASE_BATTLE_ATTRIBUTE: BATTLE_ATTRIBUTE = {
    Agility: Utils.Random(20, 30),
    Damage: Utils.Random(100, 250),
    Defense: Utils.Random(100, 250),
    Energy: Utils.Random(20, 30),
    Resistance: Utils.Random(45, 80),
    Spell: Utils.Random(10, 20),
  };
  GenerateBaseBattleAttributes(BASE_BATTLE_ATTRIBUTE);
};

const GenerateLevelAttributes = (): void => {
  const BASE_LEVEL_ATTRIBUTE: LEVEL_ATTRIBUTE = {
    Level: 1,
    TotalExperience: 0,
    NeededExperience: 200,
  };
  GenerateBaseLevelAttributes(BASE_LEVEL_ATTRIBUTE);
};
