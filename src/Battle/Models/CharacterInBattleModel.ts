import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { ISkill } from "../../Skills/Interfaces/ISkill";

export type CharacterInBattleModel = {
  Character: ICharacter;
  Skill?: ISkill;
  IsStarter: boolean;
  IsDead: boolean;
  IsCombat: boolean;
};
