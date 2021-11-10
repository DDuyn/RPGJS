import { BaseWeapon } from "../../../Items/Weapons/Base/BaseWeapon";
import { GetRandomWeapon } from "../../../Items/Weapons/Utils/GetRandomWeapon";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { Utils } from "../../../Shared/Utils/Utils";
import { Loot } from "../Loot";

//TODO: MOVER
type PROBABILITY_RARITY_ITEM = { rarity: Rarity; probability: number };

let LEVEL_DUNGEON: number = 0;
let RARITY_DUNGEON: PROBABILITY_RARITY_ITEM[] = [];
//TODO: BORRAR
const TEST_CHANCES_RARITY: PROBABILITY_RARITY_ITEM[] = [
  { rarity: Rarity.COMMON, probability: 85 },
  { rarity: Rarity.MAGIC, probability: 10 },
  { rarity: Rarity.RARE, probability: 4 },
  { rarity: Rarity.UNIQUE, probability: 1 },
  { rarity: Rarity.LEGENDARY, probability: 0 },
];

//TODO: Pasaremos instancia de Dungeon que contendrá el minimo level del item y el maximo
//TODO: La instancia de Dungeon tendrá los porcentajes de rarity
export const GenerateRandomLoot = (levelDungeon: number): Loot => {
  const loot = new Loot();
  LEVEL_DUNGEON = levelDungeon;
  RARITY_DUNGEON = Utils.Shuffle<PROBABILITY_RARITY_ITEM>(
    TEST_CHANCES_RARITY.flatMap((rarity) =>
      Array(rarity.probability).fill(rarity)
    )
  );
  loot.SetLootWeapon([...GenerateWeaponLoot()]);
  return loot;
};

const GenerateWeaponLoot = (): BaseWeapon[] => {
  const totalNumberWeapons = GetTotalNumberWeapons();
  return GenerateRandomWeapons(totalNumberWeapons);
};

const GenerateRandomWeapons = (totalLootWeapon: number): BaseWeapon[] => {
  const weaponsDroped: BaseWeapon[] = [];

  for (let index = 0; index < totalLootWeapon; index++) {
    const weaponGenerate = GetRandomWeapon(
      GenerateItemLevel(),
      GenerateRarity()
    );
    weaponsDroped.push(weaponGenerate);
  }
  return weaponsDroped;
};

//TODO: Convertir al minimo y máximo dado por la Dungeon
const GetTotalNumberWeapons = () => {
  return Utils.Random(LEVEL_DUNGEON, 4);
};

//TODO: Convertir al minimo y máximo dado por la Dungeon
const GenerateItemLevel = () => {
  return Utils.Random(LEVEL_DUNGEON, 10);
};

const GenerateRarity = () => {
  return Utils.GetIndexFromList<PROBABILITY_RARITY_ITEM>(RARITY_DUNGEON).rarity;
};
