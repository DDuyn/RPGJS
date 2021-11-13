import { Service } from "typedi";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { Attack } from "../BasicSkill/Attack";
import { ISkillManager } from "../Interfaces/ISkillManager";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";
import { GenerateAllSkills } from "../Utils/GenerateAllSkills";

@Service()
export abstract class SkillManager implements ISkillManager {
  private ListSkill: BaseSkillModel[] = [];
  private ListPassiveSkill: Map<AttributeModifyType, BaseSkillModel> =
    new Map();

  BuildInitialSkills(): BaseSkillModel[] {
    //TODO: Generar skills básicas según clase de heroe.
    this.ListSkill.push(new Attack().GenerateSkill());
    return this.ListSkill;
  }

  GetSkills(): BaseSkillModel[] {
    return this.ListSkill;
  }

  GetSkill(skillSearched: string): BaseSkillModel {
    return this.ListSkill.find((skill) => skill.Name === skillSearched)!;
  }

  AddSkill(skill: BaseSkillModel): void {
    this.ListSkill.push(skill);
  }

  GetListPassiveSkill(): Map<AttributeModifyType, BaseSkillModel> {
    return this.ListPassiveSkill;
  }

  SetPassiveSkill(passiveSkill: BaseSkillModel): void {
    if (!!this.ListPassiveSkill.get(passiveSkill.AttributeModifier))
      this.ListPassiveSkill.delete(passiveSkill.AttributeModifier);

    this.ListPassiveSkill.set(passiveSkill.AttributeModifier, passiveSkill);
  }

  HasPassiveSkillByModifierType(modifierType: AttributeModifyType): boolean {
    return !!this.ListPassiveSkill.get(modifierType);
  }
  GetPassiveSkillByModifierType(
    modifierType: AttributeModifyType
  ): BaseSkillModel {
    return this.ListPassiveSkill.get(modifierType)!;
  }

  GetSkillsForShoppingByCharacter(
    character: BaseCharacterModel
  ): BaseSkillModel[] {
    const skills: BaseSkillModel[] = GenerateAllSkills(character);
    return skills.filter(
      (skill) =>
        skill.Name !==
        this.ListSkill.find((skillSearched) => skillSearched.Name)?.Name
    );
  }
}
