import { Rarity } from "../../Shared/Enums/Rarity";
import { Utils } from "../../Shared/Utils/Utils";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";
import { GetRandomWeapon } from "../../Weapons/Utils/GetRandomWeapon";
import { BaseLootModel } from "../Models/BaseLootModel";

//TODO: MOVER
type PROBABILITY_RARITY_ITEM = { rarity: Rarity; probability: number };

let LEVEL_DUNGEON: number = 0;
let RARITY_DUNGEON: PROBABILITY_RARITY_ITEM[] = [];
//TODO: BORRAR
const TEST_CHANCES_RARITY: PROBABILITY_RARITY_ITEM[] = [
  { rarity: Rarity.COMMON, probability: 45 },
  { rarity: Rarity.MAGIC, probability: 40 },
  { rarity: Rarity.RARE, probability: 4 },
  { rarity: Rarity.UNIQUE, probability: 1 },
  { rarity: Rarity.LEGENDARY, probability: 0 },
];

//TODO: Pasaremos instancia de Dungeon que contendrá el minimo level del item y el maximo
//TODO: La instancia de Dungeon tendrá los porcentajes de rarity
export const GenerateRandomLoot = (levelDungeon: number): BaseLootModel => {
  LEVEL_DUNGEON = levelDungeon;
  RARITY_DUNGEON = Utils.Shuffle<PROBABILITY_RARITY_ITEM>(
    TEST_CHANCES_RARITY.flatMap((rarity: PROBABILITY_RARITY_ITEM) =>
      Array(rarity.probability).fill(rarity)
    )
  );
  const loot: BaseLootModel = { Weapons: GenerateWeaponLoot() };
  return loot;
};

const GenerateWeaponLoot = (): IWeapon[] => {
  const totalNumberWeapons = GetTotalNumberWeapons();
  return GenerateRandomWeapons(totalNumberWeapons);
};

const GenerateRandomWeapons = (totalLootWeapon: number): IWeapon[] => {
  const weaponsDroped: IWeapon[] = [];

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
  return Utils.GetRandomElementFromList<PROBABILITY_RARITY_ITEM>(RARITY_DUNGEON)
    .rarity;
};
