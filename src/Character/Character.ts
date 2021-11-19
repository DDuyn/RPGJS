import { CharacterClass } from "../Shared/Enums/CharacterClass";
import { CharacterType } from "../Shared/Enums/CharacterType";
import { Utils } from "../Shared/Utils/Utils";
import { ISkill } from "../Skills/Interfaces/ISkill";
import { ICharacter } from "./Interfaces/ICharacter";
import { BaseCharacterModel } from "./Model/Base/BaseCharacterModel";
import { GenerateBaseCharacterAttributes } from "./Model/Base/Utils/GenerateCharacter";
import { FindAttributeByName } from "./Utils/FindAttributeByName";

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
      Skills: [],
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
    console.log(skill);
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
}
