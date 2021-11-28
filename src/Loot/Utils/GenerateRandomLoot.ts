import { Rarity } from "../../Shared/Enums/Rarity";
import { Utils } from "../../Shared/Utils/Utils";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";
import { GetRandomWeapon } from "../../Weapons/Utils/GetRandomWeapon";
import { BaseLootModel } from "../Models/BaseLootModel";
import { ProbabilityLoot } from "../Models/ProbabilityLoot";

let LEVEL_DUNGEON: number = 0;
let RARITY_DUNGEON: ProbabilityLoot[] = [];
//TODO: BORRAR
const TEST_CHANCES_RARITY: ProbabilityLoot[] = [
  { Rarity: Rarity.COMMON, Probability: 45 },
  { Rarity: Rarity.MAGIC, Probability: 40 },
  { Rarity: Rarity.RARE, Probability: 4 },
  { Rarity: Rarity.UNIQUE, Probability: 1 },
  { Rarity: Rarity.LEGENDARY, Probability: 0 },
];

//TODO: Pasaremos instancia de Dungeon que contendrá el minimo level del item y el maximo
//TODO: La instancia de Dungeon tendrá los porcentajes de rarity
export const GenerateRandomLoot = (levelDungeon: number): BaseLootModel => {
  LEVEL_DUNGEON = levelDungeon;
  RARITY_DUNGEON = Utils.Shuffle<ProbabilityLoot>(
    TEST_CHANCES_RARITY.flatMap((rarity: ProbabilityLoot) =>
      Array(rarity.Probability).fill(rarity)
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
  return Utils.GetRandomElementFromList<ProbabilityLoot>(RARITY_DUNGEON).Rarity;
};
