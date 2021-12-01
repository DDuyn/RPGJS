import { DungeonType } from "../../Shared/Enums/DungeonType";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { Dungeon } from "../Dungeon";

export class Cave extends Dungeon {
  /**
   *
   */
  constructor(level: number) {
    super();
    this.Data = this.BuildDungeon("Cave", level, DungeonType.CAVE, [
      EnemyType.UNDEAD,
      EnemyType.WOLF,
    ]);
  }
}
