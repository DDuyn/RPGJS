import { EnemyType } from "../../Shared/Enums/EnemyType";
import { BaseDungeonModel } from "../Model/BaseDungeonModel";

export interface IDungeon {
  BuildDungeon(name: string, enemies: EnemyType[]): BaseDungeonModel;
  GetData(): BaseDungeonModel;
  UpgradeLevel(): void;
  GenerateDungeon(): void;
}
