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

export const GenerateMage = (): IAttribute[] => {
  GeneratePrimaryAttributes();
  GenerateBattleAttributes();
  GenerateLevelAttributes();

  return Object.values(LIST_ATTRIBUTES);
};

const GeneratePrimaryAttributes = (): void => {
  const BASE_PRIMARY_ATTRIBUTE: PRIMARY_ATTRIBUTE = {
    Strength: Utils.Random(15, 30),
    Dextery: Utils.Random(15, 30),
    Intelligence: Utils.Random(40, 60),
    MaxHealth: Utils.Random(200, 350),
  };

  GenerateBasePrimaryAttributes(BASE_PRIMARY_ATTRIBUTE);
};

const GenerateBattleAttributes = (): void => {
  const BASE_BATTLE_ATTRIBUTE: BATTLE_ATTRIBUTE = {
    Agility: Utils.Random(15, 25),
    Damage: Utils.Random(60, 175),
    Defense: Utils.Random(60, 125),
    Energy: Utils.Random(80, 190),
    Resistance: Utils.Random(100, 225),
    Spell: Utils.Random(150, 300),
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
