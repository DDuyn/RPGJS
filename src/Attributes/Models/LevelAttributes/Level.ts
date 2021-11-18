import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Level extends Attribute {
  private NAME: string = "Level";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.LEVEL_ATTRIBUTE);
  }
}
