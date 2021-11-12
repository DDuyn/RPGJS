import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export abstract class BaseSkill {
  private BaseSkillModel: BaseSkillModel;

  private CanPurchase: boolean;
  private Requirements: Map<BaseAttribute, number> = new Map();

  public GetSkillModel(): BaseSkillModel {
    return this.BaseSkillModel;
  }

  public InitSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void {
    return this.LogicSkill(attacker, defender);
  }

  protected abstract LogicSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void;

  protected SetCanPurchase(character: BaseCharacterModel): void {
    this.CanPurchase = true;
    this.Requirements.forEach((requirementValue, attribute) => {
      if (
        requirementValue >
        character.Attributes.GetValueByAttribute(attribute.GetName())
      ) {
        this.CanPurchase = false;
        return;
      }
    });
  }

  protected BuildSkill(
    skillName: string,
    skillType: SkillType,
    attributeModifier: AttributeModifyType,
    skillValueType: ValueType,
    skillCharacterClass: CharacterClass,
    energyCost: number,
    duration: number,
    baseValue: number,
    castSelf: boolean,
    description: string,
    requirements: Map<BaseAttribute, number>
  ): void {
    this.BaseSkillModel = {
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
      CanPurchase: this.CanPurchase,
      Requirements: requirements,
    };
  }

  protected abstract SetRequirements(): void;
  protected abstract UpgradeSkill(): void;
}
