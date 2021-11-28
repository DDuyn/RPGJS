import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { PlayerCharacter } from "../PlayerCharacter";
import { GenerateMage } from "./Utils/GenerateMage";

export class Mage extends PlayerCharacter {
  /**
   *
   */
  constructor(name: string) {
    super(name, CharacterClass.MAGE, GenerateMage());
  }
}
