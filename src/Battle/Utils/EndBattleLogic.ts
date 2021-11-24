import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { Utils } from "../../Shared/Utils/Utils";
import { CharacterInBattleModel } from "../Models/CharacterInBattleModel";

let CHARACTERS: CharacterInBattleModel[];
let TOTAL_COMBATIENTS: number = 0;
let EXPERIENCE_GAINED: number = 0;

export const EndBattleLogic = (
  characters: CharacterInBattleModel[],
  experienceGained: number
): void => {
  CHARACTERS = characters;
  EXPERIENCE_GAINED = experienceGained;
  TOTAL_COMBATIENTS = CHARACTERS.filter((c) => c.IsCombat).length;
  ExecuteLogic();
};

const ExecuteLogic = (): void => {
  CHARACTERS.forEach((character) => {
    if (character.IsCombat && !character.IsDead)
      GainExperience(character.Character);
    if (!character.IsDead) RecoverCurrentHealth(character.Character);
  });
};

const GainExperience = (character: ICharacter): void => {
  const experience = Utils.Rounded(EXPERIENCE_GAINED / TOTAL_COMBATIENTS);
  character.GainExperience(experience);
};

const RecoverCurrentHealth = (character: ICharacter): void => {
  character.RecoverCurrentHealth();
};
