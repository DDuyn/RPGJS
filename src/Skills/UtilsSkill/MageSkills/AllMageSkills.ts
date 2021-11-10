import { BaseAttributeCharacter } from "../../../Character/Base/BaseAttributesCharacter";
import { FireBall } from "../../../Character/Classes/Mage/Skills/ActiveSkill/FireBall";
import { BaseSkill } from "../../Base/BaseSkill";
export class AllMageSkills {
  /**
   *
   */
  constructor(
    characterAttributes: BaseAttributeCharacter,
    listSkill: BaseSkill[]
  ) {
    this.InitActiveSkill(characterAttributes, listSkill);
    this.InitPassiveSkil(characterAttributes, listSkill);
  }

  private InitActiveSkill(
    characterAttributes: BaseAttributeCharacter,
    listSkill: BaseSkill[]
  ): void {
    listSkill.push(new FireBall(characterAttributes));
  }

  private InitPassiveSkil(
    characterAttributes: BaseAttributeCharacter,
    listSkill: BaseSkill[]
  ): void {
    //TODO: Añadir habilidades pasivas
  }
}
