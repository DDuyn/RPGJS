import { BaseCharacterModel } from "../../../Character/Model/Base/BaseCharacterModel";
import { BaseBattleAttribute } from "../Base/BaseBattleAttribute";
import { RecoverCurrentHealth } from "./Utils/RecoverCurrentHealth";

export class CurrentHealth extends BaseBattleAttribute {
  /**
   *
   */
  constructor() {
    super();
    this.SetName("CurrentHealth");
  }

  public GetCurrentHealthRecovered(character: BaseCharacterModel): number {
    return RecoverCurrentHealth(character);
  }
}
