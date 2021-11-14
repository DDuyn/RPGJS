import { AttributeModifyType } from "../../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../../Shared/Enums/ValueType";

export type BaseModifierModel = {
  Name: string;
  Description: string;
  AttributeModifier: AttributeModifyType;
  ValueType: ValueType;
  MinValue: number;
  MaxValue: number;
  Tier: number;
};
