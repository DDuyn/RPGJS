import { BaseCharacterModel } from "../../../Character/Model/Base/BaseCharacterModel";
import { Coverage } from "../../ActiveSkill/Coverage";
import { Smash } from "../../ActiveSkill/Smash";
import { SkillManager } from "../../Managers/SkillManager";
export class AllWarriorSkills {
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
    listSkill.push(new Smash(character));
    listSkill.push(new Coverage(character));
  }

  private InitPassiveSkil(
    character: BaseCharacterModel,
    listSkill: SkillManager[]
  ): void {
    //TODO: Añadir habilidades pasivas
  }
}
