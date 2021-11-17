import { PartyModel } from "../Models/PartyModel";

export interface IBattleManager {
  InitBattle(party: PartyModel, enemies: PartyModel): void;
  Combat(): void;
  EndBattle(): void;
}
