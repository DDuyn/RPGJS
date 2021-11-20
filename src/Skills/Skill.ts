import { ICharacter } from "../Character/Interfaces/ICharacter";
import { CharacterClass } from "../Shared/Enums/CharacterClass";
import { PassiveType } from "../Shared/Enums/PassiveType";
import { SkillType } from "../Shared/Enums/SkillType";
import { ValueType } from "../Shared/Enums/ValueType";
import { Utils } from "../Shared/Utils/Utils";
import { ISkill } from "./Interfaces/ISkill";
import { BaseSkillModel } from "./Models/Base/BaseSkillModel";

export abstract class Skill implements ISkill {
  protected Data: BaseSkillModel;

  /**
   * Build Skill
   * @param character
   */
  BuildSkill(
    skillName: string,
    skillType: SkillType,
    valueType: ValueType,
    skillCharacterClass: CharacterClass,
    passiveType: PassiveType,
    energyCost: number,
    baseValue: number,
    isCastSelf: boolean,
    duration: number,
    description: string,
    requirements: Map<string, number>,
    character: ICharacter
  ): BaseSkillModel {
    const model: BaseSkillModel = {
      Name: skillName,
      SkillType: skillType,
      ValueType: valueType,
      SkillCharacterClass: skillCharacterClass,
      PassiveType: passiveType,
      EnergyCost: energyCost,
      BaseValue: baseValue,
      IsCastSelf: isCastSelf,
      Duration: duration,
      Description: description,
      Requirements: requirements,
      CanPurchase: this.CanPurchase(requirements, character),
      Level: 1,
    };

    return Utils.DeepClone<BaseSkillModel>(model);
  }

  GetName(): string {
    return this.Data.Name;
  }

  GetData(): BaseSkillModel {
    return this.Data;
  }

  /**
   * Return whether character can purchase the skill
   * @param requirements
   * @param character
   */
  CanPurchase(
    requirements: Map<string, number>,
    character: ICharacter
  ): boolean {
    let canPurchase = requirements.size > 0 ? true : false;
    if (requirements.size > 0) {
      requirements.forEach((requireValue, attribute) => {
        if (requireValue > character.GetValueByAttribute(attribute))
          canPurchase = false;
      });
    }

    return canPurchase;
  }

  /**
   * Return base damage of skill
   * @returns number
   */
  GetBaseValue(): number {
    return this.Data.BaseValue;
  }

  /**
   * Execute logic of skill
   * @param this
   * @param attacker
   * @param defender
   */
  LogicSkill(this: ISkill, attacker: ICharacter, defender?: ICharacter): void {
    throw new Error("Method not implemented.");
  }
}
