import { Agility } from "../../Attributes/BattleAttributes/Agility";
import { BaseAttributeModel } from "../../Attributes/Models/Base/BaseAttributeModel";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { ValueType } from "../../Shared/Enums/ValueType";
import { BaseActiveSkill } from "./Base/BaseActiveSkill";

export class ClockWork extends BaseActiveSkill {
  /**
   *
   */
  constructor(characterAttributes: BaseAttributeModel) {
    super();
    this.Name = "ClockWork";
    this.CastSelf = true;
    this.BaseValue = 0.1;
    this.EnergyCost = 20;
    this.SkillCharacterClass = CharacterClass.NONE;
    this.ValueType = ValueType.PERCENT;
    this.SetRequirements();
    this.SetCanPurchase(characterAttributes);
  }
  protected LogicSkill(attackerAttributes: BaseAttributeModel): number | void {
    const agility = attackerAttributes.Agility.GetValue();
    const agilityModified = agility + Math.round(agility * this.BaseValue);
    attackerAttributes.Agility.SetValue(agilityModified);
  }
  protected SetRequirements(): void {
    this.GetRequeriments().set(new Agility(), 25);
  }
  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
