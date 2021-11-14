import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../Interfaces/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class TotalExperience implements IAttribute {
  private NAME: string = "TotalExperience";
  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.LEVEL_ATTRIBUTE,
    };
  }
}
