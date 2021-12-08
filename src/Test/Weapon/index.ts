import { Warrior } from "../../Character/PlayerCharacters/Warrior/Warrior";
import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../Shared/Enums/Rarity";
import { RustedHatched } from "../../Weapons/OneHandedAxe/RustedHatched";

const warrior = new Warrior("Ragnar");
const weapon = new RustedHatched(2, Rarity.RARE);

warrior.GetData().Attributes.forEach((a) => console.log(a));

warrior.EquipWeapon(weapon, LocationWeapon.MAIN_HAND);

warrior.GetData().Attributes.forEach((a) => console.log(a));
