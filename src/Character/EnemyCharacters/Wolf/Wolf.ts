import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { Bit } from "../../../Skills/ActiveSkill/Bit";
import { Attack } from "../../../Skills/BasicSkill/Attack";
import { ISkill } from "../../../Skills/Interfaces/ISkill";
import { EnemyCharacter } from "../EnemyCharacter";
import { GenerateAttributesWolf } from "./Utils/GenerateAttributesWolf";

export class Wolf extends EnemyCharacter {
  SKILLS: ISkill[] = [new Attack(this), new Bit(this)];
  /**
   *
   */
  constructor(level: number) {
    super("Wolf", EnemyType.WOLF, GenerateAttributesWolf(level, level + 4));
    this.Data.Skills = this.SKILLS;
  }
}
