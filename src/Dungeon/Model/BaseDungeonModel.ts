import { ProbabilityLoot } from "../../Loot/Models/ProbabilityLoot";
import { BasePartyModel } from "../../Party/Models/BasePartyModel";
import { DungeonType } from "../../Shared/Enums/DungeonType";

export type BaseDungeonModel = {
  Name: string;
  Level: number;
  DungeonType: DungeonType;
  Enemies: BasePartyModel;
  ProbabilityLoot: ProbabilityLoot[];
};
