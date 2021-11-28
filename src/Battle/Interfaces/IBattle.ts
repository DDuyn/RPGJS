import { BasePartyModel } from "../../Party/Models/BasePartyModel";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";

export interface IBattle {
  InitBattle(party: BasePartyModel, enemies: BasePartyModel): void;
  Combat(): void;
  GetCombatient(): CharacterInBattleModel;
  SetSkill(skill: ISkill, characterType: CharacterType): void;
  SwitchCombatient(character: CharacterInBattleModel): void;
  EndBattle(): void;
}
