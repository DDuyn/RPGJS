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
export const GenerateAttributesWolf = (
  minLevel: number,
  maxLevel: number
): IAttribute[] => {
  GenerateLevelAttributes(minLevel, maxLevel);
  GeneratePrimaryAttributes();
  GenerateBattleAttributes();

  return Object.values(LIST_ATTRIBUTES);
};

const GeneratePrimaryAttributes = (): void => {
  const BASE_PRIMARY_ATTRIBUTE: PRIMARY_ATTRIBUTE = {
    Strength: Utils.Random(5, 10) * LIST_ATTRIBUTES.Level.GetValue(),
    Dextery: Utils.Random(5, 10) * LIST_ATTRIBUTES.Level.GetValue(),
    Intelligence: Utils.Random(5, 10) * LIST_ATTRIBUTES.Level.GetValue(),
    MaxHealth: Utils.Random(100, 150) * LIST_ATTRIBUTES.Level.GetValue(),
  };

  GenerateBasePrimaryAttributes(BASE_PRIMARY_ATTRIBUTE);
};

const GenerateBattleAttributes = (): void => {
  const BASE_BATTLE_ATTRIBUTE: BATTLE_ATTRIBUTE = {
    Agility: Utils.Random(5, 20) * LIST_ATTRIBUTES.Level.GetValue(),
    Damage: Utils.Random(10, 20) * LIST_ATTRIBUTES.Level.GetValue(),
    Defense: Utils.Random(10, 20) * LIST_ATTRIBUTES.Level.GetValue(),
    Energy: Utils.Random(5, 10) * LIST_ATTRIBUTES.Level.GetValue(),
    Resistance: Utils.Random(10, 20) * LIST_ATTRIBUTES.Level.GetValue(),
    Spell: Utils.Random(5, 10) * LIST_ATTRIBUTES.Level.GetValue(),
  };
  GenerateBaseBattleAttributes(BASE_BATTLE_ATTRIBUTE);
};

const GenerateLevelAttributes = (minLevel: number, maxLevel: number): void => {
  const BASE_LEVEL_ATTRIBUTE: LEVEL_ATTRIBUTE = {
    Level: Utils.Random(minLevel, maxLevel),
    TotalExperience: 0,
    NeededExperience: 0,
  };
  GenerateBaseLevelAttributes(BASE_LEVEL_ATTRIBUTE);
};
