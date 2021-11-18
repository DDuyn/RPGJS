import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Damage extends Attribute {
  private NAME: string = "Damage";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.BATTLE_ATTRIBUTE);
  }
}
