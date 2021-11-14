import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../IManagers/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class Strength implements IAttribute {
  private NAME: string = "Strength";
  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.PRIMARY_ATTRIBUTE,
    };
  }
}
