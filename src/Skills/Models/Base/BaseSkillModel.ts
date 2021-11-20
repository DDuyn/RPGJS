import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { PassiveType } from "../../../Shared/Enums/PassiveType";
import { SkillType } from "../../../Shared/Enums/SkillType";
import { ValueType } from "../../../Shared/Enums/ValueType";

export type BaseSkillModel = {
  Name: string;
  SkillType: SkillType;
  ValueType: ValueType;
  SkillCharacterClass: CharacterClass;
  PassiveType: PassiveType;
  EnergyCost: number;
  BaseValue: number;
  Level: number;
  IsCastSelf: boolean;
  Duration: number;
  Description: string;
  CanPurchase: boolean;
  Requirements: Map<string, number>;
};
