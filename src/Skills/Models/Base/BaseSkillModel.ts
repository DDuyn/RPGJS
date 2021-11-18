import { BaseAttributeModel } from "../../../Attributes/Models/Base/BaseAttributeModel";
import { ICharacter } from "../../../Character/Interfaces/ICharacter";
import { AttributeModifyType } from "../../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { SkillType } from "../../../Shared/Enums/SkillType";
import { ValueType } from "../../../Shared/Enums/ValueType";

export type BaseSkillModel = {
  Name: string;
  SkillType: SkillType;
  AttributeModifier: AttributeModifyType;
  ValueType: ValueType;
  SkillCharacterClass: CharacterClass;
  EnergyCost: number;
  BaseValue: number;
  Level: number;
  CastSelf: boolean;
  Duration: number;
  Description: string;
  CanPurchase: boolean;
  Requirements: Map<BaseAttributeModel, number>;
  LogicSkill: (
    this: BaseSkillModel,
    attacker: ICharacter,
    defender?: ICharacter
  ) => void;
};
