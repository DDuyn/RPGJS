import { ProbabilityLoot } from "../Loot/Models/ProbabilityLoot";
import { DungeonType } from "../Shared/Enums/DungeonType";
import { Rarity } from "../Shared/Enums/Rarity";
import { Utils } from "../Shared/Utils/Utils";
import { IDungeon } from "./Interfaces/IDungeon";
import { BaseDungeonModel } from "./Model/BaseDungeonModel";
import { GeneratePartyEnemy } from "./Utils/GenerateDungeon";

export abstract class Dungeon implements IDungeon {
  protected Data: BaseDungeonModel;

  BuildDungeon(
    name: string,
    level: number,
    dungeonType: DungeonType
  ): BaseDungeonModel {
    const model: BaseDungeonModel = {
      Name: name,
      DungeonType: dungeonType,
      Level: level,
      Enemies: GeneratePartyEnemy(level),
      ProbabilityLoot: this.GenerateRarityLoot(),
    };
    return Utils.DeepClone<BaseDungeonModel>(model);
  }

  GetData(): BaseDungeonModel {
    return this.Data;
  }

  private GenerateRarityLoot(): ProbabilityLoot[] {
    return [
      { Rarity: Rarity.COMMON, Probability: 45 },
      { Rarity: Rarity.MAGIC, Probability: 40 },
      { Rarity: Rarity.RARE, Probability: 4 },
      { Rarity: Rarity.UNIQUE, Probability: 1 },
      { Rarity: Rarity.LEGENDARY, Probability: 0 },
    ];
  }
}
