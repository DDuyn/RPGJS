import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class AddStrength extends Modifier {
  private BASE_VALUE: number = 5;
  private NAME: string = "Add Strength";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      AttributeConstants.STRENGTH,
      ValueType.FLAT,
      false
    );
    this.Data.Description = `+ ${this.Data.MinValue} Strength`;
  }
}
