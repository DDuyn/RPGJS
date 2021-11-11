import { Service } from "typedi";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { BaseSkill } from "../../Skills/Base/BaseSkill";
import { Attack } from "../../Skills/BasicSkill/Attack";
import { ICharacterSkillManager } from "../Interfaces/ICharacterSkillManager";

@Service()
export class CharacterSkillManager implements ICharacterSkillManager {
  private ListSkill: BaseSkill[] = [];
  private ListPassiveSkill: Map<AttributeModifyType, BaseSkill> = new Map();

  BuildInitialSkills(): BaseSkill[] {
    this.ListSkill.push(new Attack());
    return this.ListSkill;
  }

  GetSkills(): BaseSkill[] {
    return this.ListSkill;
  }
  GetSkill(skillSearched: string): BaseSkill {
    return this.ListSkill.find((skill) => skill.GetName() === skillSearched)!;
  }
  AddSkill(skill: BaseSkill): void {
    this.ListSkill.push(skill);
  }
  GetListPassiveSkill(): Map<AttributeModifyType, BaseSkill> {
    return this.ListPassiveSkill;
  }
  DoSkill(
    skill: BaseSkill,
    attacker: BaseAttributeModel,
    defender?: BaseAttributeModel
  ): number | void {
    return skill.InitSkill(attacker, defender);
  }
  SetPassiveSkill(passiveSkill: BaseSkill): void {
    if (!!this.ListPassiveSkill.get(passiveSkill.GetAttributeModifyType()))
      this.ListPassiveSkill.delete(passiveSkill.GetAttributeModifyType());

    this.ListPassiveSkill.set(
      passiveSkill.GetAttributeModifyType(),
      passiveSkill
    );
  }

  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean {
    return !!this.ListPassiveSkill.get(modifierType);
  }
  GetPassiveSkillByModifierType(modifierType: AttributeModifyType): BaseSkill {
    return this.ListPassiveSkill.get(modifierType)!;
  }
}
