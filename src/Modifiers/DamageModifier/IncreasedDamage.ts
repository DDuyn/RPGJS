import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class IncreasedDamage extends BaseModifier {
  private BASE_MIN_VALUE: number = 4;
  private BASE_MAX_VALUE: number = 8;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMinValue(this.BASE_MIN_VALUE);
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `Increased Damage ${this.GetMinValue()} to ${this.GetMaxValue()}`;
    this.Name = `Warlord's`;
    this.AttributeModifyType = AttributeModifyType.DAMAGE;
    this.ValueType = ValueType.FLAT;
  }
}
