import { PartyModel } from "../../Party/Models/PartyModel";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";

export interface IBattle {
  InitBattle(party: PartyModel, enemies: PartyModel): void;
  Combat(): void;
  SetSkill(skill: ISkill, characterType: CharacterType): void;
  SwitchCombatient(character: CharacterInBattleModel): void;
  EndBattle(): void;
}
