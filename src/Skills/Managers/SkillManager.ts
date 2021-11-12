import { Service } from "typedi";
import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkillManager } from "../Interfaces/ISkillManager";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

@Service()
export abstract class SkillManager implements ISkillManager {
  private SkillModel: BaseSkillModel;

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
  ): void {
    this.SkillModel = {
      Name: skillName,
      SkillType: skillType,
      AttributeModifier: attributeModifier,
      ValueType: skillValueType,
      SkillCharacterClass: skillCharacterClass,
      EnergyCost: energyCost,
      Duration: duration,
      BaseValue: baseValue,
      CastSelf: castSelf,
      Description: description,
      Level: 1,
      CanPurchase: canPurchase,
      Requirements: requirements,
      LogicSkill: logicSkill,
    };
  }

  GetSkillModel(): BaseSkillModel {
    return this.SkillModel;
  }

  SetCanPurchase(character: BaseCharacterModel): boolean {
    let canPurchase = true;
    this.SkillModel.Requirements.forEach((requireValue, attribute) => {
      if (
        requireValue >
        character.Attributes.GetValueByAttribute(attribute.GetName())
      ) {
        canPurchase = false;
      }
    });
    return canPurchase;
  }
}
