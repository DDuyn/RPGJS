import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class NeededExperience extends Attribute {
  private NAME: string = "NeededExperience";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.LEVEL_ATTRIBUTE);
  }
}
