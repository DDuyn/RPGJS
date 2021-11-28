import { PlayerCharacter } from "../../Character/PlayerCharacters/PlayerCharacter";
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
      GainExperience(character.Character as PlayerCharacter);
    if (!character.IsDead)
      RecoverCurrentHealth(character.Character as PlayerCharacter);
  });
};

const GainExperience = (character: PlayerCharacter): void => {
  const experience = Utils.Rounded(EXPERIENCE_GAINED / TOTAL_COMBATIENTS);
  character.GainExperience(experience);
};

const RecoverCurrentHealth = (character: PlayerCharacter): void => {
  character.RecoverCurrentHealth();
};
