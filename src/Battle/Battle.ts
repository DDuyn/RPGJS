import { GenerateRandomLoot } from "../Loot/Utils/GenerateRandomLoot";
import { BasePartyModel } from "../Party/Models/BasePartyModel";
import { CharacterType } from "../Shared/Enums/CharacterType";
import { Utils } from "../Shared/Utils/Utils";
import { ISkill } from "../Skills/Interfaces/ISkill";
import { IBattle } from "./Interfaces/IBattle";
import { BaseBattleModel } from "./Models/BaseBattleModel";
import { CharacterInBattleModel } from "./Models/CharacterInBattleModel";
import { SetTurnBattle } from "./Utils/SetTurnBattle";
import { TurnLogicBattle } from "./Utils/TurnLogicBattle";

export class Battle implements IBattle {
  private Data: BaseBattleModel;

  InitBattle(party: BasePartyModel, enemies: BasePartyModel): void {
    const playerParty = Utils.DeepClone<BasePartyModel>(party);
    const enemyParty = Utils.DeepClone<BasePartyModel>(enemies);
    this.Data = {
      PlayerParty: party,
      Loot: GenerateRandomLoot(1),
      PlayerPartyInBattle: playerParty,
      Enemies: enemyParty,
      PlayerCombatient: playerParty.Characters.find((c) => c.IsStarter)!,
      EnemyCombatient: enemyParty.Characters.find((e) => e.IsStarter)!,
    };
  }

  Combat(): void {
    const turnBattle = SetTurnBattle(
      this.Data.PlayerCombatient,
      this.Data.EnemyCombatient
    );
    TurnLogicBattle(turnBattle);
  }

  SetSkill(skill: ISkill, characterType: CharacterType): void {
    characterType === CharacterType.PLAYER
      ? (this.Data.PlayerCombatient.Skill = skill)
      : (this.Data.EnemyCombatient.Skill = skill);
  }

  SwitchCombatient(character: CharacterInBattleModel): void {
    character.Character.GetData().Type === CharacterType.PLAYER
      ? (this.Data.PlayerCombatient = character)
      : (this.Data.EnemyCombatient = character);
  }

  EndBattle(): void {
    throw new Error("Method not implemented.");
  }
}
