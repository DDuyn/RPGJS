import { IncreasedSpell } from "../../Modifiers/SpellModifier/IncreasedSpell";
import { Prefix } from "./Base/Prefix";

export class Eldritch extends Prefix {
  /**
   *
   */
  constructor() {
    super("Eldritch", [new IncreasedSpell()]);
  }
}
