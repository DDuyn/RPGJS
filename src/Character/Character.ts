import { IAttribute } from "../Attributes/Interfaces/IAttribute";
import { CharacterClass } from "../Shared/Enums/CharacterClass";
import { CharacterType } from "../Shared/Enums/CharacterType";
import { EnemyType } from "../Shared/Enums/EnemyType";
import { LocationWeapon } from "../Shared/Enums/LocationWeapon";
import { Rarity } from "../Shared/Enums/Rarity";
import { Utils } from "../Shared/Utils/Utils";
import { ISkill } from "../Skills/Interfaces/ISkill";
import { CopperSword } from "../Weapons/OneHandedSword/CopperSword";
import { ICharacter } from "./Interfaces/ICharacter";
import { BaseCharacterModel } from "./Model/Base/BaseCharacterModel";
import { FindAttributeByName, FindSkillByName } from "./Utils/CharacterUtils";

export abstract class Character implements ICharacter {
  protected Data: BaseCharacterModel;

  /**
   * Build Characater Data
   * @param characterName
   * @param characterClass
   * @param characterType
   * @returns BaseCharacterModel
   */
  BuildCharacter(
    characterName: string,
    characterClass: CharacterClass | EnemyType,
    characterType: CharacterType,
    attributes: IAttribute[],
    skills: ISkill[]
  ): BaseCharacterModel {
    const model = {
      Name: characterName,
      Class: characterClass,
      Type: characterType,
      Attributes: attributes,
      Weapons: new Map([
        [LocationWeapon.MAIN_HAND, new CopperSword(1, Rarity.COMMON)],
      ]), //TODO: Weapon inicial
      Skills: skills,
    };

    return Utils.DeepClone<BaseCharacterModel>(model);
  }

  /**
   * Get Character Data
   * @returns BaseCharacterModel
   */
  GetData(): BaseCharacterModel {
    return this.Data;
  }

  /**
   * Execute a skill
   * @param this
   * @param skill
   * @param defender
   */
  DoSkill(this: ICharacter, skill: ISkill, defender?: ICharacter): void {
    skill.LogicSkill(this, defender);
  }

  /**
   * Find Attribute by attribute name
   * @param attributeName
   * @returns
   */
  GetAttribute<T>(attributeName: string): T {
    return this.Data.Attributes.find((attribute) =>
      FindAttributeByName(attributeName, attribute)
    )! as unknown as T;
  }

  /**
   * Find value by attribute name
   * @param attributeName
   */
  GetValueByAttribute(attributeName: string): number {
    return this.Data.Attributes.find((attribute) =>
      FindAttributeByName(attributeName, attribute)
    )!.GetValue();
  }

  /**
   * Set value in attribute
   * @param value
   * @param attributeName
   */
  SetValueInAttribute(value: number, attributeName: string): void {
    this.Data.Attributes.find((attribute) =>
      FindAttributeByName(attributeName, attribute)
    )!.SetValue(value);
  }

  /**
   * Return skill by skill name
   * @param skillName
   * @returns ISKill
   */
  GetSkill(skillName: string): ISkill {
    return this.Data.Skills.find((skill) => FindSkillByName(skillName, skill))!;
  }

  GetSkills(): ISkill[] {
    return this.Data.Skills;
  }
}
