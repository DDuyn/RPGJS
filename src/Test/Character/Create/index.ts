import "reflect-metadata";
import { Container } from "typedi";
import { CharacterManager } from "../../../Character/Managers/CharacterManager";
import { CopperSword } from "../../../Items/Weapons/OneHandedSword/CopperSword";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { Rarity } from "../../../Shared/Enums/Rarity";

const instance = Container.get(CharacterManager);

const ragnar = instance.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);
console.log(ragnar);

const weapon = new CopperSword(1, Rarity.MAGIC);
/* ragnar.SetWeaponInLocation(weapon, LocationWeaponEquippedType.MAIN_HAND);
const wEquipped = ragnar.GetWeaponEquipped(
  LocationWeaponEquippedType.MAIN_HAND
);
console.log(wEquipped);
console.log(ragnar.GetWeaponsEquipped()); */
