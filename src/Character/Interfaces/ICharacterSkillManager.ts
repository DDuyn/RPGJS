import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { SkillManager } from "../../Skills/Managers/SkillManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

export interface ICharacterSkillManager {
  BuildInitialSkills(): SkillManager[];
  GetSkills(): SkillManager[];
  GetSkill(skillSearched: string): SkillManager;
  AddSkill(skill: SkillManager): void;
  GetListPassiveSkill(): Map<AttributeModifyType, SkillManager>;
  DoSkill(
    skill: SkillManager,
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void;
  SetPassiveSkill(passiveSkill: SkillManager): void;
  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean;
  GetPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): SkillManager;
}
