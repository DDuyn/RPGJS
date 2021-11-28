import { Attributes } from "../../Attributes/Constants/Attributes";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Modifier } from "../Modifier";

export class AddAgility extends Modifier {
  private BASE_VALUE: number = 5;
  private NAME: string = "Add Agility";
  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildModifier(
      this.NAME,
      this.BASE_VALUE,
      Attributes.AGILITY,
      ValueType.FLAT,
      false
    );
    this.Data.Description = `+${this.Data.MinValue} Agility`;
  }
}
