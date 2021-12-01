import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { BaseLootModel } from "../../Loot/Models/BaseLootModel";

export type BasePartyModel = {
  Characters: CharacterInBattleModel[];
  LootParty?: BaseLootModel;
};
