import { DungeonType } from "../../Shared/Enums/DungeonType";
import { BaseDungeonModel } from "../Model/BaseDungeonModel";

export interface IDungeon {
  BuildDungeon(
    name: string,
    level: number,
    dungeonType: DungeonType
  ): BaseDungeonModel;
  GetData(): BaseDungeonModel;
}
