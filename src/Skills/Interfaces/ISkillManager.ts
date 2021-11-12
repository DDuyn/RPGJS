import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export interface ISkillManager {
  GetSkillModel(): BaseSkillModel;
  GetAllSkillsByCharacter(character: BaseCharacterModel): ISkillManager[];
  PurchaseSkill(character: BaseCharacterModel): boolean;
}
