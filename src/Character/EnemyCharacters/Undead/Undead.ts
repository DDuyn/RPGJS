import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { EnemyCharacter } from "../EnemyCharacter";
import { GenerateAttributesUndead } from "./Utils/GenerateUndead";

export class Undead extends EnemyCharacter {
  /**
   *
   */
  constructor(level: number) {
    super(
      "Undead",
      EnemyType.UNDEAD,
      GenerateAttributesUndead(level, level + 4)
    );
  }
}
