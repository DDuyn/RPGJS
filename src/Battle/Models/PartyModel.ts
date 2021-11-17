import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { CharacterInBattleModel } from "./CharacterInBattleModel";

export type PartyModel = {
  Characters: CharacterInBattleModel[];
  LootParty?: BaseLootModel;
};
