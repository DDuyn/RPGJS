import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";

export abstract class BaseSkill {
  protected Name: string;
  protected SkillType: SkillType;
  protected AttributeModifyType: AttributeModifyType;
  protected ValueType: ValueType;
  protected SkillCharacterClass: CharacterClass;
  protected EnergyCost: number;
  protected BaseValue: number;
  protected Level: number = 1;
  protected CastSelf: boolean;
  protected Duration: number;
  protected Description: string;

  private CanPurchase: boolean;
  private Requirements: Map<BaseAttribute, number> = new Map();

  public GetName(): string {
    return this.Name;
  }

  public GetSkillType(): SkillType {
    return this.SkillType;
  }

  public GetAttributeModifyType(): AttributeModifyType {
    return this.AttributeModifyType;
  }

  public GetSkillValueType(): ValueType {
    return this.ValueType;
  }

  public GetSkillCharacterClass(): CharacterClass {
    return this.SkillCharacterClass;
  }

  public GetEnergyCost(): number {
    return this.EnergyCost;
  }

  public GetDescription(): string {
    return this.Description;
  }

  public GetDuration(): number {
    return this.Duration;
  }

  public IsCanPurchase(): boolean {
    return this.CanPurchase;
  }

  public GetRequeriments(): Map<BaseAttribute, number> {
    return this.Requirements;
  }

  public GetBaseValue(): number {
    return this.BaseValue;
  }

  public GetLevel(): number {
    return this.Level;
  }

  public IsCastSelf(): boolean {
    return this.CastSelf;
  }

  public InitSkill(
    attackerAttributes: BaseAttributeModel,
    defenderAttributes?: BaseAttributeModel
  ): number | void {
    return this.LogicSkill(attackerAttributes, defenderAttributes);
  }

  protected abstract LogicSkill(
    attackerAttributes: BaseAttributeModel,
    defenderAttributes?: BaseAttributeModel
  ): number | void;

  protected SetCanPurchase(attributes: BaseAttributeCharacter): void {
    this.CanPurchase = true;
    this.Requirements.forEach((requirementValue, attribute) => {
      if (
        requirementValue > attributes.GetValueByAttribute(attribute.GetName())
      ) {
        this.CanPurchase = false;
        return;
      }
    });
  }

  protected abstract SetRequirements(): void;
  protected abstract UpgradeSkill(): void;
}
