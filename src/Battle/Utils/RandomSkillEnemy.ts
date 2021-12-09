import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { Utils } from "../../Shared/Utils/Utils";
import { ISkill } from "../../Skills/Interfaces/ISkill";

export const RandomSkillEnemy = (enemy: ICharacter): ISkill => {
  const skills = enemy.GetSkills();
  return Utils.GetRandomElementFromList<ISkill>(skills);
};
