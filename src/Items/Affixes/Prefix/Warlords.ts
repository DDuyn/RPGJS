import { IncreasedAttackSpeed } from "../../../Modifiers/AttackSpeedModifier/IncreasedAttackSpeed";
import { IncreasedDamage } from "../../../Modifiers/DamageModifier/IncreasedDamage";
import { BasePrefix } from "./Base/BasePrefix";

export class Warlords extends BasePrefix {
  /**
   *
   */
  constructor() {
    super();
    this.ListModifiers.push(new IncreasedAttackSpeed(), new IncreasedDamage());
    this.Name = `Warlord's`;
  }
}
