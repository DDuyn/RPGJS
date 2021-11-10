import { BaseSkillCharacter } from "../../Base/BaseSkillCharacter";

export class MageSkills extends BaseSkillCharacter {
  /**
   *
   */
  constructor() {
    super();
    this.InitMageBasicSkills();
  }

  private InitMageBasicSkills(): void {
    this.InitBasicSkills();
  }
}
