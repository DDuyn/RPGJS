import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { EnemyCharacter } from "../EnemyCharacter";
import { GenerateAttributesUndead } from "./Utils/GenerateUndead";

export class Undead extends EnemyCharacter {
  /**
   *
   */
  constructor(minLevel: number, maxLevel: number) {
    super(
      "Undead",
      EnemyType.UNDEAD,
      GenerateAttributesUndead(minLevel, maxLevel)
    );
  }
}
