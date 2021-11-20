import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class IncreseadDamagePercent extends Modifier {
  private BASE_VALUE = 0.12;
  private NAME: string = "Increased Damage Percent";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      AttributeConstants.DAMAGE,
      ValueType.PERCENT,
      true
    );
    this.Data.Description = `Increased Damage ${this.Data.MinValue}% to ${this.Data.MaxValue}%`;
  }
}
