import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { Bit } from "../../../Skills/ActiveSkill/Bit";
import { Attack } from "../../../Skills/BasicSkill/Attack";
import { EnemyCharacter } from "../EnemyCharacter";
import { GenerateAttributesWolf } from "./Utils/GenerateAttributesWolf";

export class Wolf extends EnemyCharacter {
  /**
   *
   */
  constructor(level: number) {
    super("Wolf", EnemyType.WOLF, GenerateAttributesWolf(level, level + 4));
    this.Data.Skills = [new Attack(this), new Bit(this, level)];
  }
}
