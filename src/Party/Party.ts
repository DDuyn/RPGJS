import { CharacterInBattleModel } from "../Battle/Models/CharacterInBattleModel";
import { IParty } from "./Interfaces/IParty";
import { BasePartyModel } from "./Models/BasePartyModel";

export class Party implements IParty {
  private Data: BasePartyModel;

  /**
   * Create party
   * @param characters
   * @returns
   */
  CreateParty(characters: CharacterInBattleModel[]): BasePartyModel {
    const model = {
      Characters: characters,
    };
    return model;
  }
}
