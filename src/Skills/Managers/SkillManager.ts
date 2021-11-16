import { Service } from "typedi";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { Attack } from "../BasicSkill/Attack";
import { ISkillManager } from "../Interfaces/ISkillManager";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";
import { GenerateAllSkills } from "../Utils/GenerateAllSkills";

@Service()
export class SkillManager implements ISkillManager {
  private ListSkill: BaseSkillModel[] = [];
  private ListActiveSkill: BaseSkillModel[] = [];
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

  GetActiveSkills(): BaseSkillModel[] {
    return this.ListActiveSkill;
  }

  SetActiveSkill(skill: BaseSkillModel): boolean {
    if (this.ListActiveSkill.length === 4) return false;

    this.ListActiveSkill.push(skill);

    return true;
  }

  DeleteActiveSkill(skill: BaseSkillModel): boolean {
    //TODO: Crear CONTROL DE EXCEPCIONES
    const skillFounded = this.ListActiveSkill.find(
      (skillActive) => skillActive.Name === skill.Name
    );
    if (skillFounded === undefined) return false;

    const indexSkill = this.ListActiveSkill.indexOf(skillFounded);
    this.ListActiveSkill.slice(indexSkill, 1);

    return true;
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
