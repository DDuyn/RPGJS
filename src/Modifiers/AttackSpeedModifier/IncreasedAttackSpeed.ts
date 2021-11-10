import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseModifier } from "../Base/BaseModifier";

export class IncreasedAttackSpeed extends BaseModifier {
  private BASE_PERCENT_SPEED = 5;
  /**
   *
   */
  constructor() {
    super();
    this.RandomTier();
    this.SetMaxValue(this.BASE_PERCENT_SPEED);
    this.Description = ` Increased ${this.GetMaxValue()}% Attack Speed`;
    //TODO: Cambiar NAME a los modifiers
    this.Name = `Warlord's`;
    this.AttributeModifyType = AttributeModifyType.AGILITY;
    this.ValueType = ValueType.PERCENT;
  }
}
