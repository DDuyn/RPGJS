import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { BasePartyModel } from "../Models/BasePartyModel";

export interface IParty {
  GetData(): BasePartyModel;
  GetCharacter(name: string): CharacterInBattleModel;
}
