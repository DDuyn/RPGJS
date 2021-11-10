import { BaseSkillCharacter } from "../../Base/BaseSkillCharacter";
import { Rage } from "./Skills/BasicSkill/Rage";

export class WarriorSkills extends BaseSkillCharacter {
  /**
   *
   */
  constructor() {
    super();
    this.InitWarriorBasicSkills();
  }

  private InitWarriorBasicSkills(): void {
    this.InitBasicSkills();
    this.AddSkill(new Rage());
  }
}
