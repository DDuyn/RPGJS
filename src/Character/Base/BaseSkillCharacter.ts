import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { BaseSkill } from "../../Skills/Base/BaseSkill";
import { Attack } from "../../Skills/BasicSkill/Attack";
import { BaseAttributeCharacter } from "./BaseAttributesCharacter";

export abstract class BaseSkillCharacter {
  private ListSkills: BaseSkill[] = [];
  private ListPassiveSkillsActive: Map<
    AttributeModifyType,
    BaseSkill
  > = new Map();

  public GetSkills(): Array<BaseSkill> {
    return this.ListSkills;
  }

  public GetSkill(skillSearched: string): BaseSkill {
    return this.ListSkills.find((skill) => skill.GetName() === skillSearched)!;
  }

  public AddSkill(skill: BaseSkill): void {
    this.ListSkills.push(skill);
  }

  public GetListPassiveSkill(): Map<AttributeModifyType, BaseSkill> {
    return this.ListPassiveSkillsActive;
  }

  public static DoSkill(
    skill: BaseSkill,
    attacker: BaseAttributeCharacter,
    defender?: BaseAttributeCharacter
  ): number | void {
    return skill.InitSkill(attacker, defender);
  }

  public SetPassiveSkill(passiveSkill: BaseSkill): void {
    if (
      !!this.ListPassiveSkillsActive.get(passiveSkill.GetAttributeModifyType())
    )
      this.ListPassiveSkillsActive.delete(
        passiveSkill.GetAttributeModifyType()
      );

    this.ListPassiveSkillsActive.set(
      passiveSkill.GetAttributeModifyType(),
      passiveSkill
    );
  }

  public HasPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): boolean {
    return !!this.ListPassiveSkillsActive.get(modifierType);
  }

  public GetPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): BaseSkill {
    return this.ListPassiveSkillsActive.get(modifierType)!;
  }

  protected InitBasicSkills(): void {
    this.ListSkills.push(new Attack());
  }
}
