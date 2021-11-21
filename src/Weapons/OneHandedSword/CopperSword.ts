import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
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
      new Map([[AttributeConstants.STRENGTH, 6 * leveItem]]),
      leveItem,
      rarity
    );
  }
}
