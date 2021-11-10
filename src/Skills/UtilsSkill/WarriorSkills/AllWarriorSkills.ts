import { BaseAttributeCharacter } from "../../../Character/Base/BaseAttributesCharacter";
import { Coverage } from "../../../Character/Classes/Warrior/Skills/ActiveSkill/Coverage";
import { Smash } from "../../../Character/Classes/Warrior/Skills/ActiveSkill/Smash";
import { BaseSkill } from "../../Base/BaseSkill";
export class AllWarriorSkills {
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
    listSkill.push(new Smash(characterAttributes));
    listSkill.push(new Coverage(characterAttributes));
  }

  private InitPassiveSkil(
    characterAttributes: BaseAttributeCharacter,
    listSkill: BaseSkill[]
  ): void {
    //TODO: Añadir habilidades pasivas
  }
}
