import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Defense extends Attribute {
  private NAME: string = "Defense";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.BATTLE_ATTRIBUTE);
  }
}
