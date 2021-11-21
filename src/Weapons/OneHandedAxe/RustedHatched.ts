import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { Rarity } from "../../Shared/Enums/Rarity";
import { OneHandedAxe } from "./Base/OneHandedAxed";

export class RustedHatched extends OneHandedAxe {
  /**
   *
   */
  constructor(levelItem: number, rarity: Rarity) {
    super(
      "Rusted Hatched",
      "Rusted Hatched Description",
      7,
      new Map([
        [AttributeConstants.STRENGTH, 8 * levelItem],
        [AttributeConstants.DEXTERY, 5 * levelItem],
      ]),
      levelItem,
      rarity
    );
  }
}
