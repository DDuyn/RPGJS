import { CharacterInBattleModel } from "../Battle/Models/CharacterInBattleModel";
import { IParty } from "./Interfaces/IParty";
import { BasePartyModel } from "./Models/BasePartyModel";

export class Party implements IParty {
  private Data: BasePartyModel;

  /**
   *
   */
  constructor(characters: CharacterInBattleModel[]) {
    this.Data = {
      Characters: characters,
      LootParty: undefined,
    };
  }

  /**
   * Get Character from Party
   * @param character
   * @returns
   */
  GetCharacter(name: string): CharacterInBattleModel {
    return this.Data.Characters.find(
      (c) => c.Character.GetData().Name === name
    )!;
  }

  /**
   * Get Data
   * @returns
   */
  GetData(): BasePartyModel {
    return this.Data;
  }
}
