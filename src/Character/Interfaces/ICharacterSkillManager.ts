import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { BaseSkill } from "../../Skills/Base/BaseSkill";

export interface ICharacterSkillManager {
  BuildInitialSkills(): BaseSkill[];
  GetSkills(): BaseSkill[];
  GetSkill(skillSearched: string): BaseSkill;
  AddSkill(skill: BaseSkill): void;
  GetListPassiveSkill(): Map<AttributeModifyType, BaseSkill>;
  DoSkill(
    skill: BaseSkill,
    attacker: BaseAttributeModel,
    defender?: BaseAttributeModel
  ): number | void;
  SetPassiveSkill(passiveSkill: BaseSkill): void;
  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean;
  GetPassiveSkillByModifierType(modifierType: AttributeModifyType): BaseSkill;
}
