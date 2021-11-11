import { GenerateMage } from "../Model/Mage/Utils/GenerateMage";
import { GenerateWarrior } from "../Model/Warrior/Utils/GenerateWarrior";

export abstract class CharacterConstants {
  static readonly CHARACTER_BUILD_BY_CLASS = {
    WARRIOR: () => GenerateWarrior(),
    MAGE: () => GenerateMage(),
  };
}
