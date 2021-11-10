import { Warrior } from "../../../Character/Classes/Warrior/Warrior";
import { CopperSword } from "../../../Items/Weapons/OneHandedSword/CopperSword";
import { CharacterType } from "../../../Shared/Enums/CharacterType";
import { LocationWeaponEquippedType } from "../../../Shared/Enums/LocationWeaponEquipedType";
import { Rarity } from "../../../Shared/Enums/Rarity";

const ragnar = new Warrior("Ragnar", CharacterType.PLAYER);
console.log(ragnar);

const weapon = new CopperSword(1, Rarity.MAGIC);
ragnar.SetWeaponInLocation(weapon, LocationWeaponEquippedType.MAIN_HAND);
const wEquipped = ragnar.GetWeaponEquipped(
  LocationWeaponEquippedType.MAIN_HAND
);
console.log(wEquipped);
console.log(ragnar.GetWeaponsEquipped());
