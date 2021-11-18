import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { Character } from "../../Character";

export class Mage extends Character {
  /**
   *
   */
  constructor(name: string, type: CharacterType) {
    super();
    this.Data = this.BuildCharacter(name, CharacterClass.MAGE, type);
  }
}
