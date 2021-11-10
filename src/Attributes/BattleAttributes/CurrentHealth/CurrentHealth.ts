import { BaseCharacter } from "../../../Character/Base/BaseCharacter";
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

  public GetCurrentHealthRecovered(character: BaseCharacter): number {
    return RecoverCurrentHealth(character);
  }
}
