import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { ISkill } from "./ISkill";

export interface ILogicSkill {
  LogicSkill(this: ISkill, attacker: ICharacter, defender?: ICharacter): void;
}
