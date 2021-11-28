import { IAttribute } from "../../Attributes/Interfaces/IAttribute";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

export interface ICharacter {
  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass | EnemyType,
    characterType: CharacterType,
    attributes: IAttribute[],
    skills: ISkill[]
  ): BaseCharacterModel;
  DoSkill(this: ICharacter, skill: ISkill, defender?: ICharacter): void;
  GetData(): BaseCharacterModel;
  GetValueByAttribute(attributeName: string): number;
  SetValueInAttribute(value: number, attributeName: string): void;
  GetSkill(skillName: string): ISkill;
  GetSkills(): ISkill[];
}
