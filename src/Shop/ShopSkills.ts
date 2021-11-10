import { BaseCharacter } from "../Character/Base/BaseCharacter";
import { CharacterClass } from "../Shared/Enums/CharacterClass";
import { SkillType } from "../Shared/Enums/SkillType";
import { BaseSkill } from "../Skills/Base/BaseSkill";
import { AllSkills } from "../Skills/UtilsSkill/AllSkills";

export class ShopSkill {
  private static AllSkills: AllSkills;
  private static Character: BaseCharacter;

  /**
   *
   */
  constructor(character: BaseCharacter) {
    ShopSkill.Character = character;
    ShopSkill.AllSkills = new AllSkills(
      ShopSkill.Character.GetCharacterAttributes()
    );
  }

  public GetAllSkillsByCharacter(
    characterClass: CharacterClass
  ): Array<BaseSkill> {
    return ShopSkill.AllSkills.GetAllSkills().filter((skill) => {
      return (
        (skill.GetSkillCharacterClass() === CharacterClass.NONE ||
          skill.GetSkillCharacterClass() === characterClass) &&
        !this.hasSkillPurchase(skill) &&
        skill.GetSkillType() !== SkillType.BASIC_SKILL
      );
    });
  }

  public PurchaseSkill(skill: BaseSkill): boolean {
    if (skill.IsCanPurchase()) {
      ShopSkill.Character.GetCharacterSkills().AddSkill(skill);
      return true;
    }

    return false;
  }

  private hasSkillPurchase(skillSearched: BaseSkill): boolean {
    return !!ShopSkill.Character.GetCharacterSkills()
      .GetSkills()
      .find((skill) => skill.GetName() === skillSearched.GetName());
  }
}
