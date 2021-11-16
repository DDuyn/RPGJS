import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export interface ISkillManager {
  BuildInitialSkills(): BaseSkillModel[];
  GetSkills(): BaseSkillModel[];
  GetSkill(skillSearched: string): BaseSkillModel;
  AddSkill(skill: BaseSkillModel): void;
  GetActiveSkills(): BaseSkillModel[];
  SetActiveSkill(skill: BaseSkillModel): boolean;
  DeleteActiveSkill(skill: BaseSkillModel): boolean;
  GetListPassiveSkill(): Map<AttributeModifyType, BaseSkillModel>;
  SetPassiveSkill(passiveSkill: BaseSkillModel): void;
  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean;
  GetPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): BaseSkillModel;
  GetSkillsForShoppingByCharacter(
    character: BaseCharacterModel
  ): BaseSkillModel[];
}
