import { Attack } from "../../Skills/BasicSkill/Attack";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { ICharacter } from "../Interfaces/ICharacter";

export const GenerateBasicSkills = (character: ICharacter): ISkill[] => {
  return [new Attack(character)];
};
