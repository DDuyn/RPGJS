import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Dextery extends Attribute {
  private NAME: string = "Dextery";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.PRIMARY_ATTRIBUTE);
  }
}
