import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { Attack } from "../../../Skills/BasicSkill/Attack";
import { ISkill } from "../../../Skills/Interfaces/ISkill";
import { EnemyCharacter } from "../EnemyCharacter";
import { GenerateAttributesUndead } from "./Utils/GenerateUndead";

export class Undead extends EnemyCharacter {
  SKILLS: ISkill[] = [new Attack(this)];
  /**
   *
   */
  constructor(level: number) {
    super(
      "Undead",
      EnemyType.UNDEAD,
      GenerateAttributesUndead(level, level + 4)
    );
    this.Data.Skills = this.SKILLS;
  }
}
