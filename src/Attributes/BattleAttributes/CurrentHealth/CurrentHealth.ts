import { BaseCharacterModel } from "../../../Character/Model/Base/BaseCharacterModel";
import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { IAttribute } from "../../Interfaces/IAttribute";
import { BaseAttributeModel } from "../../Models/Base/BaseAttributeModel";
import { RecoverCurrentHealth } from "./Utils/RecoverCurrentHealth";

export class CurrentHealth implements IAttribute {
  private NAME: string = "CurrentHealth";

  BuildAttribute(): BaseAttributeModel {
    return {
      Name: this.NAME,
      Value: 0,
      AttributeType: AttributeType.BATTLE_ATTRIBUTE,
    };
  }

  GetCurrentHealthRecovered(character: BaseCharacterModel): number {
    return RecoverCurrentHealth(character);
  }
}
