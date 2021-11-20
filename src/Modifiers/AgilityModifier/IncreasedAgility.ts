import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class IncreasedAgility extends Modifier {
  private BASE_VALUE: number = 3;
  private NAME: string = "Increased Agility";
  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      AttributeConstants.AGILITY,
      ValueType.FLAT,
      true
    );
    this.Data.Description = `Increased Agility ${this.Data.MinValue} to ${this.Data.MaxValue}`;
  }
}
