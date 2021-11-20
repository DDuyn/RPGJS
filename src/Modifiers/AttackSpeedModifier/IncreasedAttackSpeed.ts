import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class IncreasedAttackSpeed extends Modifier {
  private BASE_VALUE = 5;
  private NAME: string = "Increased Attack Speed";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      AttributeConstants.AGILITY,
      ValueType.PERCENT,
      false
    );
    this.Data.Description = `Increased ${this.Data.MinValue}% Attack Speed`;
  }
}
