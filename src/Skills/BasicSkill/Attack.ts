import { BaseAttributeCharacter } from "../../Character/Base/BaseAttributesCharacter";
import { Utils } from "../../Shared/Utils/Utils";
import { BaseBasicSkill } from "./Base/BaseBasicSkill";

export class Attack extends BaseBasicSkill {
  /**
   *
   */
  constructor() {
    super();
    this.Name = "Attack";
    this.CastSelf = false;
  }

  protected LogicSkill(
    attackerAttributes: BaseAttributeCharacter,
    defenderAttributes: BaseAttributeCharacter
  ): number {
    const damageCalculated: number = Utils.Random(
      attackerAttributes.Damage.GetValue() * 0.75,
      attackerAttributes.Damage.GetValue()
    );
    const defenseCalculated: number = Utils.Rounded(
      100 / (100 + defenderAttributes.Defense.GetValue())
    );

    return Math.round(damageCalculated * defenseCalculated);
  }

  protected SetRequirements(): void {
    throw new Error("Method not implemented.");
  }

  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
