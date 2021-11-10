import { IncreseadDamagePercent } from "../../../Modifiers/DamageModifier/IncreseadDamagePercent";
import { AddStrength } from "../../../Modifiers/StrengthModifier/AddStrength";
import { BaseSuffix } from "./Base/BaseSuffix";

export class OffTheBrute extends BaseSuffix {
  /**
   *
   */
  constructor() {
    super();
    this.ListModifiers.push(new AddStrength(), new IncreseadDamagePercent());
    this.Name = "Off the Brute";
  }
}
