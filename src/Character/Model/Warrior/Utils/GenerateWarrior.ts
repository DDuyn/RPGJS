import { Utils } from "../../../../Shared/Utils/Utils";
import {
  BATTLE_ATTRIBUTE,
  GenerateBaseBattleAttributes,
  GenerateBasePrimaryAttributes,
  PRIMARY_ATTRIBUTE,
} from "../../../Utils/GenerateCharacter";

export const GenerateWarrior = (): void => {
  GeneratePrimaryAttributes();
  GenerateBattleAttributes();
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
