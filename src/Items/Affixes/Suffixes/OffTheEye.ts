import { AddSpell } from "../../../Modifiers/SpellModifier/AddSpell";
import { BaseSuffix } from "./Base/BaseSuffix";

export class OffTheEye extends BaseSuffix {
  /**
   *
   */
  constructor() {
    super();
    this.ListModifiers.push(new AddSpell());
    this.Name = "Off the Eye";
  }
}
