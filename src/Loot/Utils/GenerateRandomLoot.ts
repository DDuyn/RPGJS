import { IDungeon } from "../../Dungeon/Interfaces/IDungeon";
import { BaseDungeonModel } from "../../Dungeon/Model/BaseDungeonModel";
import { GetRandomDungeon } from "../../Dungeon/Utils/GetRandomDungeon";
import { Utils } from "../../Shared/Utils/Utils";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";
import { GetRandomWeapon } from "../../Weapons/Utils/GetRandomWeapon";
import { BaseLootModel } from "../Models/BaseLootModel";
import { ProbabilityLoot } from "../Models/ProbabilityLoot";

let LEVEL_DUNGEON: number = 0;
let RARITY_DUNGEON: ProbabilityLoot[] = [];

export const GenerateRandomLoot = (
  dungeon: BaseDungeonModel
): BaseLootModel => {
  LEVEL_DUNGEON = dungeon.Level;
  RARITY_DUNGEON = Utils.Shuffle<ProbabilityLoot>(
    dungeon.ProbabilityLoot.flatMap((rarity: ProbabilityLoot) =>
      Array(rarity.Probability).fill(rarity)
    )
  );
  const loot: BaseLootModel = {
    Weapons: GenerateWeaponLoot(),
    Dungeons: GenerateDungeonLoot(),
  };
  return loot;
};

const GenerateWeaponLoot = (): IWeapon[] => {
  const totalNumberWeapons = GetTotalNumberByLevel();
  return GenerateRandomWeapons(totalNumberWeapons);
};

const GenerateDungeonLoot = (): IDungeon[] => {
  const totalNumberDungeons = GetTotalNumberByLevel();
  return GenerateRandomDungeons(totalNumberDungeons);
};

const GenerateRandomDungeons = (totalLoot: number): IDungeon[] => {
  const lootDropped: IDungeon[] = [];

  for (let index = 0; index < totalLoot; index++) {
    const lootGenerate = GetDungeon();
    lootDropped.push(lootGenerate);
  }
  return lootDropped;
};

const GenerateRandomWeapons = (totalLoot: number): IWeapon[] => {
  const lootDropped: IWeapon[] = [];

  for (let index = 0; index < totalLoot; index++) {
    const lootGenerate = GetWeapon();
    lootDropped.push(lootGenerate);
  }
  return lootDropped;
};

const GetWeapon = (): IWeapon => {
  return GetRandomWeapon(GenerateItemLevel(), GenerateRarity());
};

const GetDungeon = (): IDungeon => {
  return GetRandomDungeon(GenerateItemLevel());
};

const GetTotalNumberByLevel = () => {
  return Utils.Random(LEVEL_DUNGEON, LEVEL_DUNGEON + 4);
};

const GenerateItemLevel = () => {
  return Utils.Random(LEVEL_DUNGEON, LEVEL_DUNGEON + 4);
};

const GenerateRarity = () => {
  return Utils.GetRandomElementFromList<ProbabilityLoot>(RARITY_DUNGEON).Rarity;
};
