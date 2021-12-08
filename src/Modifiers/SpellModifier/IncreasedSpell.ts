import { Attributes } from "../../Attributes/Constants/Attributes";
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
      Attributes.SPELL,
      ValueType.FLAT
    );
    this.Data.Description = `Increased Spell ${this.Data.Value}`;
  }
}
