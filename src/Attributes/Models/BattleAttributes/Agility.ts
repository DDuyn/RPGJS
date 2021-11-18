import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Agility extends Attribute {
  private NAME: string = "Agility";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.BATTLE_ATTRIBUTE);
  }
}
