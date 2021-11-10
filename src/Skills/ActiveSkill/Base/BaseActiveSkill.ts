import { SkillType } from "../../../Shared/Enums/SkillType";
import { BaseSkill } from "../../Base/BaseSkill";

export abstract class BaseActiveSkill extends BaseSkill {
  /**
   *
   */
  constructor() {
    super();
    this.Level = 1;
    this.SkillType = SkillType.ACTIVE_SKILL;
  }
}
