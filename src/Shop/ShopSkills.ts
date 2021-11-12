import { BaseCharacterModel } from "../Character/Model/Base/BaseCharacterModel";
import { CharacterClass } from "../Shared/Enums/CharacterClass";
import { SkillType } from "../Shared/Enums/SkillType";
import { SkillManager } from "../Skills/Managers/SkillManager";
import { AllSkills } from "../Skills/UtilsSkill/AllSkills";

export class ShopSkill {
  private static AllSkills: AllSkills;
  private static Character: BaseCharacterModel;

  /**
   *
   */
  constructor(character: BaseCharacterModel) {
    ShopSkill.Character = character;
    ShopSkill.AllSkills = new AllSkills(character);
  }

  public GetAllSkillsByCharacter(
    characterClass: CharacterClass
  ): SkillManager[] {
    return ShopSkill.AllSkills.GetAllSkills().filter((skill) => {
      return (
        (skill.GetSkillModel().SkillCharacterClass === CharacterClass.NONE ||
          skill.GetSkillModel().SkillCharacterClass === characterClass) &&
        !this.hasSkillPurchase(skill) &&
        skill.GetSkillModel().SkillType !== SkillType.BASIC_SKILL
      );
    });
  }

  public PurchaseSkill(skill: SkillManager): boolean {
    if (skill.GetSkillModel().CanPurchase) {
      ShopSkill.Character.Skills.AddSkill(skill);
      return true;
    }

    return false;
  }

  private hasSkillPurchase(skillSearched: SkillManager): boolean {
    return !!ShopSkill.Character.Skills.GetSkills().find(
      (skill) =>
        skill.GetSkillModel().Name === skillSearched.GetSkillModel().Name
    );
  }
}
