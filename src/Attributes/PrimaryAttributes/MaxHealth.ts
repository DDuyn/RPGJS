import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../Interfaces/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class MaxHealth implements IAttribute {
  private NAME: string = "MaxHealth";
  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.PRIMARY_ATTRIBUTE,
    };
  }
}
