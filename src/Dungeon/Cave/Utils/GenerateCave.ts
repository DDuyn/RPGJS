import { Action } from "../../../Battle/Enums/Action";
import { CharacterInBattleModel } from "../../../Battle/Models/CharacterInBattleModel";
import { EnemyCharacter } from "../../../Character/EnemyCharacters/EnemyCharacter";
import { Undead } from "../../../Character/EnemyCharacters/Undead/Undead";
import { Wolf } from "../../../Character/EnemyCharacters/Wolf/Wolf";
import { ICharacter } from "../../../Character/Interfaces/ICharacter";
import { BasePartyModel } from "../../../Party/Models/BasePartyModel";
import { EnemyType } from "../../../Shared/Enums/EnemyType";
import { Utils } from "../../../Shared/Utils/Utils";

const ENEMY_TYPE = {
  UNDEAD: (level: number) => new Undead(level),
  WOLF: (level: number) => new Wolf(level),
  WITCH: (level: number) => new Undead(level),
};

let LEVEL: number = 1;

export const GenerateCave = (level: number): BasePartyModel => {
  LEVEL = level;
  const enemies: ICharacter[] = GenerateEnemies();
  return GenerateEnemyParty(enemies);
};

const GenerateEnemies = (): ICharacter[] => {
  const enemies: EnemyCharacter[] = [];
  const totalEnemies = Utils.Random(4 + LEVEL, 12 + LEVEL);
  for (let index = 0; index < totalEnemies; index++) {
    const enemyType = Utils.GetRandomEnumKey<EnemyType>(EnemyType);
    const enemy = ENEMY_TYPE[enemyType](LEVEL);
    enemies.push(enemy);
  }
  return enemies;
};

const GenerateEnemyParty = (enemies: ICharacter[]): BasePartyModel => {
  const enemyParty: BasePartyModel = {
    Characters: [],
  };
  enemies.forEach((enemy, index) => {
    const enemyBattle: CharacterInBattleModel = {
      Character: enemy,
      Action: Action.WAIT,
      Skill: undefined,
      IsStarter: false,
      IsDead: false,
      IsCombat: false,
    };
    if (index === 0) {
      enemyBattle.IsStarter = true;
      enemyBattle.IsCombat = true;
    }
    enemyParty.Characters.push(enemyBattle);
  });
  return enemyParty;
};
