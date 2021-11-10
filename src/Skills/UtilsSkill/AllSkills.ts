import { BaseAttributeCharacter } from "../../Character/Base/BaseAttributesCharacter";
import { ClockWork } from "../ActiveSkill/ClockWork";
import { BaseSkill } from "../Base/BaseSkill";
import { Regenerate } from "../PassiveSkill/Regenerate";
import { AllMageSkills } from "./MageSkills/AllMageSkills";
import { AllWarriorSkills } from "./WarriorSkills/AllWarriorSkills";

export class AllSkills {
  private ListAllSkills: Array<BaseSkill> = new Array();

  constructor(characterAttributes: BaseAttributeCharacter) {
    new AllWarriorSkills(characterAttributes, this.ListAllSkills);
    new AllMageSkills(characterAttributes, this.ListAllSkills);
    this.InitCommonActiveSkills(characterAttributes);
  }

  public GetAllSkills(): Array<BaseSkill> {
    return this.ListAllSkills;
  }

  private InitCommonActiveSkills(
    characterAttributes: BaseAttributeCharacter
  ): void {
    this.ListAllSkills.push(new Regenerate(characterAttributes));
    this.ListAllSkills.push(new ClockWork(characterAttributes));
  }
}
