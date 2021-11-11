import { Service } from "typedi";
import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { CharacterAttributesManager } from "../../Character/Managers/CharacterAttributesManager";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ISkillManager } from "../Interfaces/ISkillManager";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

@Service()
export class SkillManager implements ISkillManager {
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
    requirements: Map<BaseAttribute, number>
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
    };
  }

  GetName(): string {
    return this.SkillModel.Name;
  }
  GetSkillType(): SkillType {
    return this.SkillModel.SkillType;
  }
  GetAttributeModifierType(): AttributeModifyType {
    return this.SkillModel.AttributeModifier;
  }
  GetSkillValueType(): ValueType {
    return this.SkillModel.ValueType;
  }
  GetSkillCharacterClass(): CharacterClass {
    return this.SkillModel.SkillCharacterClass;
  }
  GetEnergyCost(): number {
    return this.SkillModel.EnergyCost;
  }
  GetDescription(): string {
    return this.SkillModel.Description;
  }
  GetDuration(): number {
    return this.SkillModel.Duration;
  }
  IsCanPurchase(): boolean {
    return this.SkillModel.CanPurchase;
  }
  GetRequirements(): Map<BaseAttribute, number> {
    return this.SkillModel.Requirements;
  }
  GetBaseValue(): number {
    return this.SkillModel.BaseValue;
  }
  GetLevel(): number {
    return this.SkillModel.Level;
  }
  IsCastSelf(): boolean {
    return this.SkillModel.CastSelf;
  }

  InitSkill(
    attackerAttributes: BaseAttributeModel,
    defenderAttributes: BaseAttributeModel
  ): number | void {
    return this.LogicSkill(attackerAttributes, defenderAttributes);
  }
  LogicSkill(
    attackerAttributes: BaseAttributeModel,
    defenderAttributes: BaseAttributeModel
  ): number | void {
    throw new Error("Method not implemented.");
  }
  SetCanPurchase(attributes: CharacterAttributesManager): boolean {
    let canPurchase = true;
    this.SkillModel.Requirements.forEach((requireValue, attribute) => {
      if (requireValue > attributes.GetValueByAttribute(attribute.GetName())) {
        canPurchase = false;
      }
    });
    return canPurchase;
  }

  UpdrageSkill(): void {
    throw new Error("Method not implemented.");
  }
}
