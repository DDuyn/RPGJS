import { BaseLootModel } from "../../Loot/Models/BaseLootModel";
import { IPartyManager } from "../Interfaces/IPartyManager";
import { PartyModel } from "../Models/PartyModel";

export class PartyManager implements IPartyManager {
  private Party: PartyModel;

  CreateParty(party: PartyModel): void {
    this.Party = party;
  }
  GetParty(): PartyModel {
    return this.Party;
  }
  AddLootToParty(loot: BaseLootModel): void {
    this.Party.LootParty = loot;
  }
}
