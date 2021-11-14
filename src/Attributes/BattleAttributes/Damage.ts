import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../IManagers/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class Damage implements IAttribute {
  private NAME: string = "Damage";

  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.BATTLE_ATTRIBUTE,
    };
  }
}
