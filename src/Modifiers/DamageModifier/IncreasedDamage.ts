import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class IncreasedDamage extends Modifier {
  private BASE_VALUE: number = 4;
  private NAME: string = "Increased Damage";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      AttributeConstants.DAMAGE,
      ValueType.FLAT,
      true
    );
    this.Data.Description = `Increased Damage ${this.Data.MinValue} to ${this.Data.MaxValue}`;
  }
}
