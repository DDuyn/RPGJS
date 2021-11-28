import { Attributes } from "../../Attributes/Constants/Attributes";
import { Rarity } from "../../Shared/Enums/Rarity";
import { OneHandedSword } from "./Base/OneHandedSword";

export class CopperSword extends OneHandedSword {
  /**
   *
   */
  constructor(leveItem: number, rarity: Rarity) {
    super(
      "Copper Sword",
      "Copper Sword Description",
      7,
      new Map([[Attributes.STRENGTH, 6 * leveItem]]),
      leveItem,
      rarity
    );
  }
}
