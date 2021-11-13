import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { ISkillManager } from "../../../Skills/Interfaces/ISkillManager";
import { ICharacterAttributesManager } from "../../Interfaces/ICharacterAttributesManager";
import { CharacterWeaponManager } from "../../Managers/CharacterWeaponManager";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: ICharacterAttributesManager;
  SkillManager: ISkillManager;
  Weapons: CharacterWeaponManager;
};
