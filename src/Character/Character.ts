import { CharacterClass } from "../Shared/Enums/CharacterClass";
import { CharacterType } from "../Shared/Enums/CharacterType";
import { Utils } from "../Shared/Utils/Utils";
import { ISkill } from "../Skills/Interfaces/ISkill";
import { ICharacter } from "./Interfaces/ICharacter";
import { BaseCharacterModel } from "./Model/Base/BaseCharacterModel";
import { FindAttributeByName, FindSkillByName } from "./Utils/CharacterUtils";
import { GenerateBasicSkills } from "./Utils/GenerateBasicSkills";
import { GenerateBaseCharacterAttributes } from "./Utils/GenerateCharacter";

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
    characterClass: CharacterClass,
    characterType: CharacterType
  ): BaseCharacterModel {
    const model = {
      Name: characterName,
      Class: characterClass,
      Type: characterType,
      Attributes: GenerateBaseCharacterAttributes(characterClass),
      Weapons: [],
      Skills: GenerateBasicSkills(this),
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

  /**
   * Purchase skill for Character
   * @param skill
   * @returns boolean
   */
  PurchaseSkill(skill: ISkill): boolean {
    if (!skill.GetData().CanPurchase) return false;
    this.Data.Skills.push(skill);
    return true;
  }
}
