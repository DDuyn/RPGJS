import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { BaseSkillModel } from "../../Skills/Models/Base/BaseSkillModel";

export type CharacterInBattleModel = {
  Character: ICharacter;
  Skill?: BaseSkillModel;
  IsStarter: boolean;
  IsDead: boolean;
  IsCombat: boolean;
};
