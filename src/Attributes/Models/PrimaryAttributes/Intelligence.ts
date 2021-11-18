import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { Attribute } from "../../Attribute";

export class Intelligence extends Attribute {
  private NAME: string = "Intelligence";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.PRIMARY_ATTRIBUTE);
  }
}
