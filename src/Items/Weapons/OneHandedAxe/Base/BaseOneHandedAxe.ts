import { IncreasedAttackSpeed } from "../../../../Modifiers/AttackSpeedModifier/IncreasedAttackSpeed";
import { WeaponType } from "../../../../Shared/Enums/WeaponType";
import { BaseWeapon } from "../../Base/BaseWeapon";

export abstract class BaseOneHandedAxe extends BaseWeapon {
  /**
   *
   */
  constructor() {
    super();
    this.WeaponType = WeaponType.ONE_HANDED_AXE;
    this.IsTwoHanded = false;

    this.SetImplicitModifiers();
  }

  protected SetImplicitModifiers(): void {
    this.GetImplicitsModifiers().push(new IncreasedAttackSpeed());
  }
}
