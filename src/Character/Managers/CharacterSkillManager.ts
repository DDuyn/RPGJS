import { Service } from "typedi";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { Attack } from "../../Skills/BasicSkill/Attack";
import { SkillManager } from "../../Skills/Managers/SkillManager";
import { ICharacterSkillManager } from "../Interfaces/ICharacterSkillManager";
import { BaseCharacterModel } from "../Model/Base/BaseCharacterModel";

@Service()
export class CharacterSkillManager implements ICharacterSkillManager {
  private ListSkill: SkillManager[] = [];
  private ListPassiveSkill: Map<AttributeModifyType, SkillManager> = new Map();

  BuildInitialSkills(): SkillManager[] {
    this.ListSkill.push(new Attack());
    return this.ListSkill;
  }

  GetSkills(): SkillManager[] {
    return this.ListSkill;
  }
  GetSkill(skillSearched: string): SkillManager {
    return this.ListSkill.find(
      (skill) => skill.GetSkillModel().Name === skillSearched
    )!;
  }
  AddSkill(skill: SkillManager): void {
    this.ListSkill.push(skill);
  }
  GetListPassiveSkill(): Map<AttributeModifyType, SkillManager> {
    return this.ListPassiveSkill;
  }
  DoSkill(
    skill: SkillManager,
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void {
    return skill.GetSkillModel().LogicSkill(attacker, defender);
  }
  SetPassiveSkill(passiveSkill: SkillManager): void {
    if (
      !!this.ListPassiveSkill.get(
        passiveSkill.GetSkillModel().AttributeModifier
      )
    )
      this.ListPassiveSkill.delete(
        passiveSkill.GetSkillModel().AttributeModifier
      );

    this.ListPassiveSkill.set(
      passiveSkill.GetSkillModel().AttributeModifier,
      passiveSkill
    );
  }

  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean {
    return !!this.ListPassiveSkill.get(modifierType);
  }
  GetPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): SkillManager {
    return this.ListPassiveSkill.get(modifierType)!;
  }
}
