import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class AddAgility extends BaseModifier {
  private BASE_MAX_VALUE: number = 5;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMaxValue(this.BASE_MAX_VALUE);
    this.Description = `+${this.GetMaxValue()} Agility`;
    this.Name = "Of the Eagle";
    this.AttributeModifyType = AttributeModifyType.AGILITY;
    this.ValueType = ValueType.FLAT;
  }
}
