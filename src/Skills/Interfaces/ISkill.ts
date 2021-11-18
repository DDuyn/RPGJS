import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";

export interface ISkill {
  GenerateSkill(character?: BaseCharacterModel): BaseSkillModel;
  LogicSkill(
    this: BaseSkillModel,
    attacker: ICharacter,
    defender?: ICharacter
  ): void;
}
