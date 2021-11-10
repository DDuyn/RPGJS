import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";

export interface ICharacterManager {
  BuildCharacter(
    characterName: String,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): ICharacterManager;
  GetCharacterName(): string;
  GetCharacterClass(): CharacterClass;
  GetCharacterType(): CharacterType;
}
