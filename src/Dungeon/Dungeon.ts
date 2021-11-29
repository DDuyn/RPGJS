import { Action } from "../Battle/Enums/Action";
import { CharacterInBattleModel } from "../Battle/Models/CharacterInBattleModel";
import { Undead } from "../Character/EnemyCharacters/Undead/Undead";
import { Party } from "../Party/Party";
import { EnemyType } from "../Shared/Enums/EnemyType";
import { Rarity } from "../Shared/Enums/Rarity";
import { Utils } from "../Shared/Utils/Utils";
import { IDungeon } from "./Interfaces/IDungeon";
import { BaseDungeonModel } from "./Model/BaseDungeonModel";
import { PhaseDungeonModel } from "./Model/PhaseDungeonModel";

export abstract class Dungeon implements IDungeon {
  protected Data: BaseDungeonModel;

  BuildDungeon(name: string, enemies: EnemyType[]): BaseDungeonModel {
    const model: BaseDungeonModel = {
      Name: name,
      EnemiesType: enemies,
      Level: 1,
      Phases: [],
      Loot: [],
    };
    return Utils.DeepClone<BaseDungeonModel>(model);
  }

  GetData(): BaseDungeonModel {
    return this.Data;
  }

  UpgradeLevel(): void {
    this.Data.Level++;
  }

  GenerateDungeon(): void {
    const level = this.Data.Level;
    //TODO: Revisar generación número phases
    const numberPhases = Utils.Random(1 * level, 6 * level);
    const phasesDungeon: PhaseDungeonModel[] = [];
    const enemyInBattle: CharacterInBattleModel[] = [
      {
        Character: new Undead(level, level + 4),
        Action: Action.WAIT,
        IsStarter: true,
        IsCombat: true,
        IsDead: false,
      },
      {
        Character: new Undead(level, level + 4),
        Action: Action.WAIT,
        IsStarter: false,
        IsCombat: false,
        IsDead: false,
      },
    ];
    for (let index = 1; index <= numberPhases; index++) {
      const phase: PhaseDungeonModel = {
        Phase: index,
        isFinished: false,
        Enemies: new Party(enemyInBattle).GetData(), //TODO: Revisar generación enemigos por phase,
      };
      phasesDungeon.push(phase);
    }

    this.Data.Loot = [
      { Rarity: Rarity.COMMON, Probability: 45 },
      { Rarity: Rarity.MAGIC, Probability: 40 },
      { Rarity: Rarity.RARE, Probability: 4 },
      { Rarity: Rarity.UNIQUE, Probability: 1 },
      { Rarity: Rarity.LEGENDARY, Probability: 0 },
    ];
    this.Data.Phases = phasesDungeon;
  }
}
