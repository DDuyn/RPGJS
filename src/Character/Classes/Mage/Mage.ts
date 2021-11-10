import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { BaseCharacter } from "../../Base/BaseCharacter";
import { WeaponCharacterManager } from "../../Base/WeaponCharacterManager";
import { MageAttributes } from "./MageAttributes";
import { MageSkills } from "./MageSkills";

export class Mage extends BaseCharacter {
  /**
   *
   */
  constructor(name: string, type: CharacterType) {
    super();
    this.BuildCharacter(
      name,
      new MageAttributes(),
      new MageSkills(),
      CharacterClass.MAGE,
      type,
      new WeaponCharacterManager()
    );
  }
}
