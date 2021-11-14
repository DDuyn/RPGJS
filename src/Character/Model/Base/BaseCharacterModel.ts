import { IAttributeManager } from "../../../Attributes/Interfaces/IAttributeManager";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { ISkillManager } from "../../../Skills/Interfaces/ISkillManager";
import { BaseSkillModel } from "../../../Skills/Models/Base/BaseSkillModel";
import { CharacterWeaponManager } from "../../Managers/CharacterWeaponManager";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  Attributes: IAttributeManager;
  SkillManager: ISkillManager;
  Weapons: CharacterWeaponManager;
  DoSkill: (
    this: BaseCharacterModel,
    skill: BaseSkillModel,
    defender?: BaseCharacterModel
  ) => number | void;
};
