import { ValueType } from "../../../Shared/Enums/ValueType";

export type BaseModifierModel = {
  Name: string;
  Description: string;
  AttributeModifier: string;
  ValueType: ValueType;
  MinValue: number;
  MaxValue: number;
  Tier: number;
};
