import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { BasePartyModel } from "../Models/BasePartyModel";

export interface IParty {
  CreateParty(characters: CharacterInBattleModel[]): BasePartyModel;
}
