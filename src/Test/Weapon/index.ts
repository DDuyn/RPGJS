import { GenerateRandomLoot } from "../../Loot/Utils/GenerateRandomLoot";

const loot = GenerateRandomLoot(3);
loot.Weapons!.forEach((weapon) => console.log(weapon));
