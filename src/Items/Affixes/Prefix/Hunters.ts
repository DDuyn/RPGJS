import { IncreasedAgility } from "../../../Modifiers/AgilityModifier/IncreasedAgility";
import { BasePrefix } from "./Base/BasePrefix";

export class Hunters extends BasePrefix {
  /**
   *
   */
  constructor() {
    super();
    this.ListModifiers.push(new IncreasedAgility());
    this.Name = `'Hunter's`;
  }
}
