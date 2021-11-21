import { AddAgility } from "../../Modifiers/AgilityModifier/AddAgility";
import { Suffix } from "./Base/Suffix";

export class OffTheEagle extends Suffix {
  /**
   *
   */
  constructor() {
    super("Off the Eagle", [new AddAgility()]);
  }
}
