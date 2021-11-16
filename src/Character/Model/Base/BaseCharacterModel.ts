import { IAttributeManager } from "../../../Attributes/Interfaces/IAttributeManager";
import { ILootManager } from "../../../Loot/Interface/ILootManager";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { ISkillManager } from "../../../Skills/Interfaces/ISkillManager";
import { BaseSkillModel } from "../../../Skills/Models/Base/BaseSkillModel";
import { IWeaponManager } from "../../../Weapons/Interfaces/IWeaponManager";

export type BaseCharacterModel = {
  Name: string;
  Class: CharacterClass;
  Type: CharacterType;
  AttributeManager: IAttributeManager;
  SkillManager: ISkillManager;
  WeaponManager: IWeaponManager;
  LootManager: ILootManager;
  DoSkill: (
    this: BaseCharacterModel,
    skill: BaseSkillModel,
    defender?: BaseCharacterModel
  ) => number | void;
};
