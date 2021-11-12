import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export interface ISkillManager {
  BuildSkill(
    skillName: string,
    skillType: SkillType,
    attributeModifier: AttributeModifyType,
    skillValueType: ValueType,
    skillCharacterClass: CharacterClass,
    energyCost: number,
    duration: number,
    baseValue: number,
    castSelf: boolean,
    canPurchase: boolean,
    description: string,
    requirements: Map<BaseAttribute, number>,
    logicSkill: (
      attacker: BaseCharacterModel,
      defender?: BaseCharacterModel
    ) => number | void
  ): void;
  GetSkillModel(): BaseSkillModel;
  SetCanPurchase(character: BaseCharacterModel): boolean;
}
