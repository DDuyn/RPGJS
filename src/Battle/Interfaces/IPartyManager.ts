import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { PartyModel } from "../Models/PartyModel";

export interface IPartyManager {
  CreateParty(party: PartyModel): void;
  GetParty(): PartyModel;
  AddLootToParty(loot: BaseLootModel): void;
}
