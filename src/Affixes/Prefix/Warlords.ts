import { IncreasedAttackSpeed } from "../../Modifiers/AttackSpeedModifier/IncreasedAttackSpeed";
import { IncreasedDamage } from "../../Modifiers/DamageModifier/IncreasedDamage";
import { Prefix } from "./Base/Prefix";

export class Warlords extends Prefix {
  /**
   *
   */
  constructor() {
    super(`Warlord's`, [new IncreasedAttackSpeed(), new IncreasedDamage()]);
  }
}
