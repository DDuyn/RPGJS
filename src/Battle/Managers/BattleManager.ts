import { Service } from "typedi";
import { GenerateRandomLoot } from "../../Loot/Utils/GenerateRandomLoot";
import { Utils } from "../../Shared/Utils/Utils";
import { IBattleManager } from "../Interfaces/IBattleManager";
import { BaseBattleModel } from "../Models/BaseBattleModel";
import { PartyModel } from "../Models/PartyModel";
import { SetTurnBattle } from "../Utils/SetTurnBattle";
import { TurnLogicBattle } from "../Utils/TurnLogicBattle";

@Service()
export class BattleManager implements IBattleManager {
  private Battle: BaseBattleModel;

  InitBattle(party: PartyModel, enemies: PartyModel): void {
    const battleModel: BaseBattleModel = {
      PlayerParty: party,
      Loot: GenerateRandomLoot(1),
      PlayerPartyInBattle: Utils.DeepClone<PartyModel>(party),
      Enemies: Utils.DeepClone<PartyModel>(enemies),
      PlayerCombatient: party.Characters.find((c) => c.IsStarter)!,
      EnemyCombatient: enemies.Characters.find((e) => e.IsStarter)!,
    };

    this.Battle = battleModel;
  }

  Combat(): void {
    const turnBattle = SetTurnBattle(
      this.Battle.PlayerCombatient,
      this.Battle.EnemyCombatient
    );

    TurnLogicBattle(turnBattle);
  }

  EndBattle(): void {
    throw new Error("Method not implemented.");
  }
}
