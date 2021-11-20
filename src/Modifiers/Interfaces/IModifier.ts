import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifierModel } from "../Model/Base/BaseModifierModel";

export interface IModifier {
  BuildModifier(
    modifierName: string,
    baseValue: number,
    attributeModifier: string,
    valueType: ValueType,
    hasValueRange: boolean
  ): BaseModifierModel;
}
