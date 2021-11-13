import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export interface ISkill {
  GenerateSkill(character?: BaseCharacterModel): BaseSkillModel;
  LogicSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void;
}
