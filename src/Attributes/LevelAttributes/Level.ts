import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../IManagers/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class Level implements IAttribute {
  private NAME: string = "Level";
  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.LEVEL_ATTRIBUTE,
    };
  }
}
