import { ProbabilityLoot } from "../../Loot/Models/ProbabilityLoot";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { PhaseDungeonModel } from "./PhaseDungeonModel";

export type BaseDungeonModel = {
  Name: string;
  Level: number;
  EnemiesType: EnemyType[];
  Phases: PhaseDungeonModel[];
  Loot: ProbabilityLoot[];
};
