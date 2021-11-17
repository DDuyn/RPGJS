import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { CharacterInBattleModel } from "./CharacterInBattleModel";
import { PartyModel } from "./PartyModel";

export type BaseBattleModel = {
  PlayerParty: PartyModel;
  Loot: BaseLootModel;
  PlayerPartyInBattle: PartyModel;
  Enemies: PartyModel;
  PlayerCombatient: CharacterInBattleModel;
  EnemyCombatient: CharacterInBattleModel;
};
