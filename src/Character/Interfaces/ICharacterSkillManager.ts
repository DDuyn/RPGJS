import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { BaseSkillModel } from "../../Skills/Models/Base/BaseSkillModel";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

export interface ICharacterSkillManager {
  BuildInitialSkills(): BaseSkillModel[];
  GetSkills(): BaseSkillModel[];
  GetSkill(skillSearched: string): BaseSkillModel;
  AddSkill(skill: BaseSkillModel): void;
  GetListPassiveSkill(): Map<AttributeModifyType, BaseSkillModel>;
  DoSkill(
    skill: BaseSkillModel,
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void;
  SetPassiveSkill(passiveSkill: BaseSkillModel): void;
  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean;
  GetPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): BaseSkillModel;
}
