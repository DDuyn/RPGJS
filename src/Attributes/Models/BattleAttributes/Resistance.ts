import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Resistance extends Attribute {
  private NAME: string = "Resistance";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.BATTLE_ATTRIBUTE);
  }
}
