import { GenerateRandomLoot } from "../../Loot/Utils/GenerateRandomLoot";
import { Rarity } from "../../Shared/Enums/Rarity";

const loot = GenerateRandomLoot(3);

console.log(
  loot.Weapons?.find((w) => w.GetData().Rarity !== Rarity.COMMON)!.GetData()
    .Implicits
);

console.log(
  loot.Weapons?.find((w) => w.GetData().Rarity !== Rarity.COMMON)!.GetData()
    .Explicits
);
