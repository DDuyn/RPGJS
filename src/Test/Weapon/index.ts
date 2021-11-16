import "reflect-metadata";
import { Container } from "typedi";
import { CharacterManager } from "../../Character/Managers/CharacterManager";
import { GenerateRandomLoot } from "../../Loot/Utils/GenerateRandomLoot";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";

const loot = GenerateRandomLoot(1);
const characterManager = Container.get<CharacterManager>(CharacterManager);

const ragnar = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);

loot.Weapons!.forEach((weapon) => console.log(weapon));

const weapon = loot.Weapons![0];
ragnar.WeaponManager.SetWeaponInLocation(weapon, LocationWeapon.HELMET);

console.log(ragnar.WeaponManager.GetWeaponsEquipped());
