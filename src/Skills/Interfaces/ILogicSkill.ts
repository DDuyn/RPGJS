import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";

export interface ILogicSkill {
  LogicSkill(
    attacker?: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void;
}
