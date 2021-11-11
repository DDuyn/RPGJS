import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

export interface ICharacterManager {
  BuildCharacter(
    characterName: String,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): BaseCharacterModel;
}
