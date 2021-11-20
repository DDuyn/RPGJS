import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class IncreasedSpell extends Modifier {
  private BASE_VALUE: number = 5;
  private NAME: string = "Increased Spell";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      AttributeConstants.SPELL,
      ValueType.FLAT,
      true
    );
    this.Data.Description = `Increased Spell ${this.Data.MinValue} to ${this.Data.MaxValue}`;
  }
}
