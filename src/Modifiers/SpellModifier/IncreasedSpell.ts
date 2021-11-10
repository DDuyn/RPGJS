import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class IncreasedSpell extends BaseModifier {
  private BASE_MIN_VALUE: number = 5;
  private BASE_MAX_VALUE: number = 9;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMinValue(this.BASE_MIN_VALUE);
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `Increased Spell ${this.GetMinValue()} to ${this.GetMaxValue()}`;
    this.Name = `Eldritch`;
    this.AttributeModifyType = AttributeModifyType.SPELL;
    this.ValueType = ValueType.FLAT;
  }
}
