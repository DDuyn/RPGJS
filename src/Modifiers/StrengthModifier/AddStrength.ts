import { Attributes } from "../../Attributes/Constants/Attributes";
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
      Attributes.STRENGTH,
      ValueType.FLAT
    );
    this.Data.Description = `+ ${this.Data.Value} Strength`;
  }
}
