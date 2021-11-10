import { Utils } from "../../../Shared/Utils/Utils";
import { BaseAttributeCharacter } from "../../Base/BaseAttributesCharacter";
import { Mana } from "./Attributes/Mana";

export class MageAttributes extends BaseAttributeCharacter {
  public Mana: Mana = new Mana();
  /**
   *
   */
  constructor() {
    super();
    this.BuildPrimaryAttributes();
    this.BuildBattleAttributes();
    this.BuildAttributes();
    this.FillListAttributes();
  }

  private BuildPrimaryAttributes(): void {
    this.Strength.SetValue(Utils.Random(8, 15));
    this.Dextery.SetValue(Utils.Random(1, 5));
    this.Intelligence.SetValue(Utils.Random(1, 5));
    this.MaxHealth.SetValue(Utils.Random(30, 100));
    this.Mana.SetValue(Utils.Random(4, 8));
  }

  private BuildBattleAttributes(): void {
    this.Damage.SetValue(Utils.Random(15, 40));
    this.Spell.SetValue(Utils.Random(2, 6));
    this.Defense.SetValue(Utils.Random(12, 20));
    this.Resistance.SetValue(Utils.Random(8, 12));
    this.Agility.SetValue(Utils.Random(4, 10));
    this.Energy.SetValue(Utils.Random(6, 12));
  }
}
