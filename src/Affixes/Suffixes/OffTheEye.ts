import { AddSpell } from "../../Modifiers/SpellModifier/AddSpell";
import { Suffix } from "./Base/Suffix";

export class OffTheEye extends Suffix {
  /**
   *
   */
  constructor() {
    super("Off the Eye", [new AddSpell()]);
  }
}
