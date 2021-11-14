import { AttributeType } from "../../Shared/Enums/AttributeType";
import { IAttribute } from "../Interfaces/IAttribute";
import { BaseAttributeModel } from "../Models/Base/BaseAttributeModel";

export class Spell implements IAttribute {
  private NAME: string = "Spell";
  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.BATTLE_ATTRIBUTE,
    };
  }
}
