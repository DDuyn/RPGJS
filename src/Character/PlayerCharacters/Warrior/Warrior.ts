import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { PlayerCharacter } from "../PlayerCharacter";
import { GenerateWarrior } from "./Utils/GenerateWarrior";

export class Warrior extends PlayerCharacter {
  /**
   *
   */
  constructor(name: string) {
    super(name, CharacterClass.WARRIOR, GenerateWarrior());
  }
}
