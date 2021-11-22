import { CharacterInBattleModel } from "../Battle/Models/CharacterInBattleModel";
import { Utils } from "../Shared/Utils/Utils";
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
    this.Data.Characters = characters;
    return Utils.DeepClone<BasePartyModel>(this.Data);
  }
}
