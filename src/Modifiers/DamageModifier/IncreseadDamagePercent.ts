import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class IncreseadDamagePercent extends BaseModifier {
  private BASE_MIN_VALUE = 0.12;
  private BASE_MAX_VALUE = 0.35;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMinValue(this.BASE_MIN_VALUE);
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `Increased Damage ${this.GetMinValue()}% to ${this.GetMaxValue()}%`;
    this.Name = "Of the Brute";
    this.AttributeModifyType = AttributeModifyType.DAMAGE;
    this.ValueType = ValueType.PERCENT;
  }
}
