import { ProbabilityLoot } from "../../Loot/Models/ProbabilityLoot";
import { DungeonType } from "../../Shared/Enums/DungeonType";
import { EnemyType } from "../../Shared/Enums/EnemyType";

export type BaseDungeonModel = {
  Name: string;
  Level: number;
  DungeonType: DungeonType;
  EnemiesType: EnemyType[];
  Loot: ProbabilityLoot[];
};
