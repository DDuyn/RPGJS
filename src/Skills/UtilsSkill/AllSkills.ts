import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { ClockWork } from "../ActiveSkill/ClockWork";
import { SkillManager } from "../Managers/SkillManager";
import { Regenerate } from "../PassiveSkill/Regenerate";
import { AllMageSkills } from "./MageSkills/AllMageSkills";
import { AllWarriorSkills } from "./WarriorSkills/AllWarriorSkills";

export class AllSkills {
  private ListAllSkills: SkillManager[] = [];

  constructor(character: BaseCharacterModel) {
    new AllWarriorSkills(character, this.ListAllSkills);
    new AllMageSkills(character, this.ListAllSkills);
    this.InitCommonActiveSkills(character);
  }

  public GetAllSkills(): SkillManager[] {
    return this.ListAllSkills;
  }

  private InitCommonActiveSkills(character: BaseCharacterModel): void {
    this.ListAllSkills.push(new Regenerate(character));
    this.ListAllSkills.push(new ClockWork(character));
  }
}
