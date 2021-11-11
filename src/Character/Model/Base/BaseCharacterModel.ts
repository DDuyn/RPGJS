import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { ICharacterAttributesManager } from "../../Interfaces/ICharacterAttributesManager";
import { CharacterSkillManager } from "../../Managers/CharacterSkillManager";
import { CharacterWeaponManager } from "../../Managers/CharacterWeaponManager";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: ICharacterAttributesManager;
  Skills: CharacterSkillManager;
  Weapons: CharacterWeaponManager;
};
