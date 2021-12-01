import { ProbabilityLoot } from "../../Loot/Models/ProbabilityLoot";
import { DungeonType } from "../../Shared/Enums/DungeonType";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { BaseDungeonModel } from "../Model/BaseDungeonModel";

export interface IDungeon {
  BuildDungeon(
    name: string,
    dungeonType: DungeonType,
    enemies: EnemyType[]
  ): BaseDungeonModel;
  GetData(): BaseDungeonModel;
  UpgradeLevel(): void;
  GenerateRarityLoot(): ProbabilityLoot[];
}
