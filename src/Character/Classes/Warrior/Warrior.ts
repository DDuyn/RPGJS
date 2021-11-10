import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { BaseCharacter } from "../../Base/BaseCharacter";
import { WeaponCharacterManager } from "../../Base/WeaponCharacterManager";
import { WarriorAttributes } from "./WarriorAttributes";
import { WarriorSkills } from "./WarriorSkills";

export class Warrior extends BaseCharacter {
  constructor(name: string, type: CharacterType) {
    super();
    this.BuildCharacter(
      name,
      new WarriorAttributes(),
      new WarriorSkills(),
      CharacterClass.WARRIOR,
      type,
      new WeaponCharacterManager()
    );
  }
}
