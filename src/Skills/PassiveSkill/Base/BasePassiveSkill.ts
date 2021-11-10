import { SkillType } from "../../../Shared/Enums/SkillType";
import { BaseSkill } from "../../Base/BaseSkill";

export abstract class BasePassiveSkill extends BaseSkill {
  /**
   *
   */
  constructor() {
    super();
    this.Level = 1;
    this.SkillType = SkillType.PASSIVE_SKILL;
  }
}
