import { DungeonType } from "../../Shared/Enums/DungeonType";
import { Dungeon } from "../Dungeon";

export class Forest extends Dungeon {
  /**
   *
   */
  constructor(level: number) {
    super();
    this.Data = this.BuildDungeon("Forest", level, DungeonType.FOREST);
  }
}
