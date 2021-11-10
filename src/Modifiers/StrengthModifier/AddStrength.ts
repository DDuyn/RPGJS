import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class AddStrength extends BaseModifier {
  private BASE_MAX_VALUE: number = 5;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `+${this.GetMaxValue()} Strength`;
    this.Name = "Of the Brute";
    this.AttributeModifyType = AttributeModifyType.STRENGTH;
    this.ValueType = ValueType.FLAT;
  }
}
