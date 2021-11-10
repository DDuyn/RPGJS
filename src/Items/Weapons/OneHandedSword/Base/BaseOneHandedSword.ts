import { IncreasedDamage } from "../../../../Modifiers/DamageModifier/IncreasedDamage";
import { WeaponType } from "../../../../Shared/Enums/WeaponType";
import { BaseWeapon } from "../../Base/BaseWeapon";

export abstract class BaseOneHandedSword extends BaseWeapon {
  /**
   *
   */
  constructor() {
    super();
    this.WeaponType = WeaponType.ONE_HANDED_SWORD;
    this.IsTwoHanded = false;

    this.SetImplicitModifiers();
  }

  protected SetImplicitModifiers(): void {
    this.GetImplicitsModifiers().push(new IncreasedDamage());
  }
}
