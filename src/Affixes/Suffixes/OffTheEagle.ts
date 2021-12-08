import { IncreasedAgility } from "../../Modifiers/AgilityModifier/IncreasedAgility";
import { Suffix } from "./Base/Suffix";

export class OffTheEagle extends Suffix {
  /**
   *
   */
  constructor() {
    super("Off the Eagle", [new IncreasedAgility()]);
  }
}
