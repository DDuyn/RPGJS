import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../Interfaces/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class Intelligence implements IAttribute {
  private NAME: string = "Intelligence";
  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.PRIMARY_ATTRIBUTE,
    };
  }
}
