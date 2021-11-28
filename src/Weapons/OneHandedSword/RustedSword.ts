import { Attributes } from "../../Attributes/Constants/Attributes";
import { Rarity } from "../../Shared/Enums/Rarity";
import { OneHandedSword } from "./Base/OneHandedSword";

export class RustedSword extends OneHandedSword {
  /**
   *
   */
  constructor(leveItem: number, rarity: Rarity) {
    super(
      "Rusted Sword",
      "Rusted Sword Description",
      3,
      new Map([[Attributes.STRENGTH, 3 * leveItem]]),
      leveItem,
      rarity
    );
  }
}
