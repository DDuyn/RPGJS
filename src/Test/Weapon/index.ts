import { Warrior } from "../../Character/PlayerCharacters/Warrior/Warrior";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../Shared/Enums/Rarity";
import { RustedHatched } from "../../Weapons/OneHandedAxe/RustedHatched";
import { CopperSword } from "../../Weapons/OneHandedSword/CopperSword";

const warrior = new Warrior("Ragnar");
const weaponSword = new CopperSword(2, Rarity.COMMON);
const weaponHatched = new RustedHatched(2, Rarity.RARE);

warrior
  .GetData()
  .Attributes.forEach((a) => console.log(a.GetName(), a.GetValueModified()));
warrior.EquipWeapon(weaponHatched, LocationWeapon.MAIN_HAND);
warrior
  .GetData()
  .Attributes.forEach((a) => console.log(a.GetName(), a.GetValueModified()));
warrior.EquipWeapon(weaponSword, LocationWeapon.MAIN_HAND);
warrior
  .GetData()
  .Attributes.forEach((a) => console.log(a.GetName(), a.GetValueModified()));
