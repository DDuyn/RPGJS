import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { ISkillManager } from "../../../Skills/Interfaces/ISkillManager";
import { BaseSkillModel } from "../../../Skills/Models/Base/BaseSkillModel";
import { ICharacterAttributesManager } from "../../Interfaces/ICharacterAttributesManager";
import { CharacterWeaponManager } from "../../Managers/CharacterWeaponManager";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: ICharacterAttributesManager;
  SkillManager: ISkillManager;
  Weapons: CharacterWeaponManager;
  DoSkill: (
    this: BaseCharacterModel,
    skill: BaseSkillModel,
    defender?: BaseCharacterModel
  ) => number | void;
};
