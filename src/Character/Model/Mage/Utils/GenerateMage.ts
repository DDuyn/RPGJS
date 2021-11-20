import { Utils } from "../../../../Shared/Utils/Utils";
import {
  BATTLE_ATTRIBUTE,
  GenerateBaseBattleAttributes,
  GenerateBasePrimaryAttributes,
  PRIMARY_ATTRIBUTE,
} from "../../../Utils/GenerateCharacter";

export const GenerateMage = (): void => {
  GeneratePrimaryAttributes();
  GenerateBattleAttributes();
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
