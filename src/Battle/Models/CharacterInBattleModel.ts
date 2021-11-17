import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { BaseSkillModel } from "../../Skills/Models/Base/BaseSkillModel";

export type CharacterInBattleModel = {
  Character: BaseCharacterModel;
  Skill?: BaseSkillModel;
  IsStarter: boolean;
  IsDead: boolean;
  IsCombat: boolean;
};
