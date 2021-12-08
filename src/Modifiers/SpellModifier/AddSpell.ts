import { Attributes } from "../../Attributes/Constants/Attributes";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class AddSpell extends Modifier {
  private BASE_VALUE: number = 5;
  private NAME: string = "Add Spell";
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
    this.Data.Description = `+${this.Data.Value} Spell`;
  }
}
