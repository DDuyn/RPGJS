import { IncreseadDamagePercent } from "../../Modifiers/DamageModifier/IncreseadDamagePercent";
import { AddStrength } from "../../Modifiers/StrengthModifier/AddStrength";
import { Suffix } from "./Base/Suffix";

export class OffTheBrute extends Suffix {
  /**
   *
   */
  constructor() {
    super("Off the Brute", [new AddStrength(), new IncreseadDamagePercent()]);
  }
}
