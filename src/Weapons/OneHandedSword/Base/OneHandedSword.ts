import { IncreasedDamage } from "../../../Modifiers/DamageModifier/IncreasedDamage";
import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { LocationWeapon } from "../../../Shared/Enums/LocationWeapon";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { WeaponType } from "../../../Shared/Enums/WeaponType";
import { Weapon } from "../../Weapon";

export abstract class OneHandedSword extends Weapon {
  private WEAPON_TYPE: WeaponType = WeaponType.ONE_HANDED_SWORD;
  private LOCATIONS: LocationWeapon[] = [
    LocationWeapon.MAIN_HAND,
    LocationWeapon.OFF_HAND,
  ];
  private IS_TWO_HANDED: boolean = false;
  private IMPLICITS: IModifier[] = [new IncreasedDamage()];

  /**
   *
   */
  constructor(
    weaponName: string,
    description: string,
    baseDamage: number,
    requirements: Map<string, number>,
    levelItem: number,
    rarity: Rarity
  ) {
    super();
    this.Data = this.BuildWeapon(
      weaponName,
      description,
      baseDamage,
      this.WEAPON_TYPE,
      this.LOCATIONS,
      this.IS_TWO_HANDED,
      this.IMPLICITS,
      requirements,
      levelItem,
      rarity
    );
  }
}
