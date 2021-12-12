import { Attributes } from "../../Attributes/Constants/Attributes";
import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { Utils } from "../../Shared/Utils/Utils";
import { ISkill } from "../../Skills/Interfaces/ISkill";

export const RandomSkillEnemy = (enemy: ICharacter): ISkill => {
  const skills = enemy
    .GetSkills()
    .filter(
      (s) =>
        s.GetData().EnergyCost <=
        enemy.GetValueModifiedByAttribute(Attributes.ENERGY)
    );
  return Utils.GetRandomElementFromList<ISkill>(skills);
};
