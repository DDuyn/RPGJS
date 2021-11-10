import { Utils } from "../../../Shared/Utils/Utils";
import { BaseAttributeCharacter } from "../../Base/BaseAttributesCharacter";
import { Fury } from "./Attributes/Fury";

export class WarriorAttributes extends BaseAttributeCharacter {
  public Fury: Fury = new Fury();

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
    this.Fury.SetValue(Utils.Random(1, 6));
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
