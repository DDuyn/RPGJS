import { Utils } from "../../Shared/Utils/Utils";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";

export const GainExperience = (
  characters: CharacterInBattleModel[],
  experienceGained: number
): void => {
  const totalCombatients = characters.filter((c) => c.IsCombat).length;
  const experience = Utils.Rounded(experienceGained / totalCombatients);
  characters.forEach((c) => {
    if (c.IsCombat) c.Character.GainExperience(experience);
  });
};
