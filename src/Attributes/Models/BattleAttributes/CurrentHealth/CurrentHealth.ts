import { ICharacter } from "../../../../Character/Interfaces/ICharacter";
import { AttributeType } from "../../../../Shared/Enums/AttributeType";
import { Attribute } from "../../../Attribute";
import { RecoverCurrentHealth } from "./Utils/RecoverCurrentHealth";

export class CurrentHealth extends Attribute {
  private NAME: string = "CurrentHealth";

  /**
   *
   */
  constructor() {
    super();
    this.Data = this.BuildAttribute(this.NAME, AttributeType.BATTLE_ATTRIBUTE);
  }

  GetCurrentHealthRecovered(character: ICharacter): number {
    //TODO: Revisar
    return RecoverCurrentHealth(character);
  }
}
