import { GenerateRandomLoot } from "../../Battle/Loot/Utils/GenerateRandomLoot";
const loot = GenerateRandomLoot(1);

loot.GetLootWeapons().forEach((weapon) => console.log(weapon));
