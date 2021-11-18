import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Strength extends Attribute {
  private NAME: string = "Strength";
  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.PRIMARY_ATTRIBUTE);
  }
}
