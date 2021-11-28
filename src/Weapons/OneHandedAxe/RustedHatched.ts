import { Attributes } from "../../Attributes/Constants/Attributes";
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
        [Attributes.STRENGTH, 8 * levelItem],
        [Attributes.DEXTERY, 5 * levelItem],
      ]),
      levelItem,
      rarity
    );
  }
}
