import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { Action } from "../Enums/Action";

export type CharacterInBattleModel = {
  Character: ICharacter;
  Action: Action;
  Skill?: ISkill;
  IsStarter: boolean;
  IsDead: boolean;
  IsCombat: boolean;
};
