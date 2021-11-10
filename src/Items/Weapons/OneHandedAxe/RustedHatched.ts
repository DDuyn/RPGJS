import { Dextery } from "../../../Attributes/PrimaryAttributes/Dextery";
import { Strength } from "../../../Attributes/PrimaryAttributes/Strength";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { BaseOneHandedAxe } from "./Base/BaseOneHandedAxe";

export class RustedHatched extends BaseOneHandedAxe {
  private BASE_DAMAGE: number = 7;
  /**
   *
   */
  constructor(levelItem: number, rarity: Rarity) {
    super();
    this.Rarity = rarity;
    this.Level = levelItem;
    this.ItemCharacterClass = CharacterClass.NONE;
    this.Damage = this.CalculateBaseDamageItem(
      this.BASE_DAMAGE,
      levelItem,
      rarity
    );
    this.SetPrefixes(rarity);
    this.SetSuffixes(rarity);
    this.GenerateItemNameByRarity("Rusted Hatched", rarity);
  }
  protected SetRequirements(): void {
    this.GetRequeriments().set(new Strength(), 8 * this.Level);
    this.GetRequeriments().set(new Dextery(), 5 * this.Level);
  }
}
