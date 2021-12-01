import { BaseDungeonModel } from "../../Dungeon/Model/BaseDungeonModel";
import { BasePartyModel } from "../../Party/Models/BasePartyModel";
import { Party } from "../../Party/Party";
import { EnemyType } from "../../Shared/Enums/EnemyType";
import { Utils } from "../../Shared/Utils/Utils";

const TOTAL_ENEMIES = 4;

export const GenerateEnemies = (dungeon: BaseDungeonModel): BasePartyModel => {
  CreateEnemyParty(dungeon.EnemiesType);
  return new Party([]).GetData();
};

const CreateEnemyParty = (enemiesType: EnemyType[]): BasePartyModel => {
  for (let index = 0; index < TOTAL_ENEMIES; index++) {
    const enemyType = Utils.GetRandomElementFromList<EnemyType>(enemiesType);
    console.log(enemyType);
  }

  return new Party([]).GetData();
};
