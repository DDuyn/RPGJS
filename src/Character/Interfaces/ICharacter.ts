import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { BaseSkillModel } from "../../Skills/Models/Base/BaseSkillModel";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

export interface ICharacter {
  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass,
    characterType: CharacterType
  ): BaseCharacterModel;
  DoSkill(this: ICharacter, skill: BaseSkillModel, defender?: ICharacter): void;
  GetData(): BaseCharacterModel;
  GetValueByAttribute(attributeName: string): number;
  SetValueInAttribute(value: number, attributeName: string): void;
}
