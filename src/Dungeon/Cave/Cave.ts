import { DungeonType } from "../../Shared/Enums/DungeonType";
import { Dungeon } from "../Dungeon";

export class Cave extends Dungeon {
  /**
   *
   */
  constructor(level: number) {
    super();
    this.Data = this.BuildDungeon("Cave", level, DungeonType.CAVE);
  }
}
