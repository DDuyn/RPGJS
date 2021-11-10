import { AddAgility } from "../../../Modifiers/AgilityModifier/AddAgility";
import { BaseSuffix } from "./Base/BaseSuffix";

export class OffTheEagle extends BaseSuffix {
  /**
   *
   */
  constructor() {
    super();
    this.ListModifiers.push(new AddAgility());
    this.Name = "Off the Eagle";
  }
}
