import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { EnemyCharacter } from "../EnemyCharacter";
import { GenerateAttributesWolf } from "./Utils/GenerateAttributesWolf";

export class Wolf extends EnemyCharacter {
  /**
   *
   */
  constructor(level: number) {
    super("Wolf", EnemyType.WOLF, GenerateAttributesWolf(level, level + 4));
  }
}
