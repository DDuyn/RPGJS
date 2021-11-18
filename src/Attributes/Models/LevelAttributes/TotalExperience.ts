import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class TotalExperience extends Attribute {
  private NAME: string = "TotalExperience";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.LEVEL_ATTRIBUTE);
  }
}
