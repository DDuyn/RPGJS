import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class IncreasedAgility extends BaseModifier {
  private BASE_MIN_VALUE: number = 3;
  private BASE_MAX_VALUE: number = 6;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMinValue(this.BASE_MIN_VALUE);
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `Increased Agility ${this.GetMinValue()} to ${this.GetMaxValue()}`;
    this.Name = `Hunter's`;
    this.AttributeModifyType = AttributeModifyType.AGILITY;
    this.ValueType = ValueType.FLAT;
  }
}
