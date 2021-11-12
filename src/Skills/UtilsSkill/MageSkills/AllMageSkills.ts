import { BaseCharacterModel } from "../../../Character/Model/Base/BaseCharacterModel";
import { FireBall } from "../../ActiveSkill/FireBall";
import { SkillManager } from "../../Managers/SkillManager";
export class AllMageSkills {
  /**
   *
   */
  constructor(character: BaseCharacterModel, listSkill: SkillManager[]) {
    this.InitActiveSkill(character, listSkill);
    this.InitPassiveSkil(character, listSkill);
  }

  private InitActiveSkill(
    character: BaseCharacterModel,
    listSkill: SkillManager[]
  ): void {
    listSkill.push(new FireBall(character));
  }

  private InitPassiveSkil(
    character: BaseCharacterModel,
    listSkill: SkillManager[]
  ): void {
    //TODO: Añadir habilidades pasivas
  }
}
