import { IncreasedAgility } from "../../Modifiers/AgilityModifier/IncreasedAgility";
import { Prefix } from "./Base/Prefix";

export class Hunters extends Prefix {
  /**
   *
   */
  constructor() {
    super(`Hunter's`, [new IncreasedAgility()]);
  }
}
