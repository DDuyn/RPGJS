import { IncreasedSpell } from "../../../Modifiers/SpellModifier/IncreasedSpell";
import { BasePrefix } from "./Base/BasePrefix";

export class Eldritch extends BasePrefix {
  /**
   *
   */
  constructor() {
    super();
    this.ListModifiers.push(new IncreasedSpell());
    this.Name = "Eldritch";
  }
}
