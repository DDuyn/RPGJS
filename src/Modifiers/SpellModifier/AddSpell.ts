import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class AddSpell extends BaseModifier {
  private BASE_MAX_VALUE: number = 5;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `+${this.GetMaxValue()} Mana`;
    this.Name = "Of the Eye";
    this.AttributeModifyType = AttributeModifyType.SPELL;
    this.ValueType = ValueType.FLAT;
  }
}
