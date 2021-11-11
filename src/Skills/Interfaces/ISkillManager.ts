import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { ICharacterAttributesManager } from "../../Character/Interfaces/ICharacterAttributesManager";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";

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
    requirements: Map<BaseAttribute, number>
  ): void;
  GetName(): string;
  GetSkillType(): SkillType;
  GetAttributeModifierType(): AttributeModifyType;
  GetSkillValueType(): ValueType;
  GetSkillCharacterClass(): CharacterClass;
  GetEnergyCost(): number;
  GetDescription(): string;
  GetDuration(): number;
  IsCanPurchase(): boolean;
  GetRequirements(): Map<BaseAttribute, number>;
  GetBaseValue(): number;
  GetLevel(): number;
  IsCastSelf(): boolean;
  InitSkill(
    attackerAttributes: BaseAttributeModel,
    defenderAttributes: BaseAttributeModel
  ): number | void;
  LogicSkill(
    attackerAttributes: BaseAttributeModel,
    defenderAttributes: BaseAttributeModel
  ): number | void;
  SetCanPurchase(attributes: ICharacterAttributesManager): boolean;
  UpdrageSkill(): void;
}
