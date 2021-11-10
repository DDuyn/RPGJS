import { Strength } from "../../../Attributes/PrimaryAttributes/Strength";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { BaseOneHandedSword } from "./Base/BaseOneHandedSword";

export class RustedSword extends BaseOneHandedSword {
  private BASE_DAMAGE: number = 3;
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
    this.SetExplicitModifiers();
    this.GenerateItemNameByRarity("Rusted Sword", rarity);
  }
  protected SetRequirements(): void {
    this.GetRequeriments().set(new Strength(), 3 * this.Level);
  }
}
