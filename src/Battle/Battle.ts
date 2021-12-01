import { GenerateCave } from "../Dungeon/Cave/Utils/GenerateCave";
import { BaseDungeonModel } from "../Dungeon/Model/BaseDungeonModel";
import { GenerateRandomLoot } from "../Loot/Utils/GenerateRandomLoot";
import { BasePartyModel } from "../Party/Models/BasePartyModel";
import { CharacterType } from "../Shared/Enums/CharacterType";
import { Utils } from "../Shared/Utils/Utils";
import { ISkill } from "../Skills/Interfaces/ISkill";
import { Action } from "./Enums/Action";
import { IBattle } from "./Interfaces/IBattle";
import { BaseBattleModel } from "./Models/BaseBattleModel";
import { CharacterInBattleModel } from "./Models/CharacterInBattleModel";
import { SyncCharacterDataBattle } from "./Utils/BattleUtils";
import { EndBattleLogic } from "./Utils/EndBattleLogic";
import { SetTurnBattle } from "./Utils/SetTurnBattle";
import { TurnLogicBattle } from "./Utils/TurnLogicBattle";

export class Battle implements IBattle {
  private Data: BaseBattleModel;

  InitBattle(party: BasePartyModel, dungeon: BaseDungeonModel): void {
    const playerParty = Utils.DeepClone<BasePartyModel>(party);
    const enemyParty = GenerateCave(dungeon.Level);

    this.Data = {
      PlayerParty: party,
      Loot: GenerateRandomLoot(dungeon),
      PlayerPartyInBattle: playerParty,
      Enemies: enemyParty,
      PlayerCombatient: playerParty.Characters.find((c) => c.IsStarter)!,
      EnemyCombatient: enemyParty.Characters.find((e) => e.IsStarter)!,
    };

    console.log(enemyParty);
  }

  GetCombatient(): CharacterInBattleModel {
    return this.Data.PlayerCombatient;
  }

  Combat(): void {
    const turnBattle = SetTurnBattle(
      this.Data.PlayerCombatient,
      this.Data.EnemyCombatient
    );
    this.Data.EnemyCombatient.Skill =
      this.Data.EnemyCombatient.Character.GetSkill("Attack");
    TurnLogicBattle(turnBattle);
  }

  SetSkill(skill: ISkill, characterType: CharacterType): void {
    if (characterType === CharacterType.PLAYER) {
      this.Data.PlayerCombatient.Skill = skill;
      this.Data.PlayerCombatient.Action = Action.FIGTH;
    } else {
      this.Data.EnemyCombatient.Skill = skill;
      this.Data.EnemyCombatient.Action = Action.FIGTH;
    }
  }

  SwitchCombatient(character: CharacterInBattleModel): void {
    if (character.Character.GetData().Type === CharacterType.PLAYER) {
      this.Data.PlayerCombatient = character;
      this.Data.PlayerCombatient.IsCombat = true;
      this.Data.PlayerCombatient.Action = Action.SWITCH;
    } else {
      this.Data.EnemyCombatient = character;
      this.Data.EnemyCombatient.Action = Action.SWITCH;
    }
  }

  EndBattle(): void {
    SyncCharacterDataBattle(
      this.Data.PlayerParty,
      this.Data.PlayerPartyInBattle
    );
    this.Data.PlayerParty.LootParty = this.Data.Loot;
    EndBattleLogic(this.Data.PlayerParty.Characters, 500);
  }
}
