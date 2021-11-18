import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class MaxHealth extends Attribute {
  private NAME: string = "MaxHealth";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.PRIMARY_ATTRIBUTE);
  }
}
