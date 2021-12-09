import { BaseDungeonModel } from "../../Dungeon/Model/BaseDungeonModel";
import { BasePartyModel } from "../../Party/Models/BasePartyModel";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";

export interface IBattle {
  InitBattle(
    party: BasePartyModel,
    dungeon: BaseDungeonModel
  ): CharacterInBattleModel[];
  Combat(): void;
  HasEnemiesLive(): boolean;
  GetCombatient(): CharacterInBattleModel;
  NextEnemy(): void;
  SetSkill(skill: ISkill, characterType: CharacterType): void;
  SwitchCombatient(character: CharacterInBattleModel): void;
  EndBattle(): void;
}
