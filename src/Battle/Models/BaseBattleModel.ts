import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { BasePartyModel } from "../../Party/Models/BasePartyModel";
import { CharacterInBattleModel } from "./CharacterInBattleModel";

export type BaseBattleModel = {
  PlayerParty: BasePartyModel;
  Loot: BaseLootModel;
  PlayerPartyInBattle: BasePartyModel;
  Enemies: BasePartyModel;
  PlayerCombatient: CharacterInBattleModel;
  EnemyCombatient: CharacterInBattleModel;
};
