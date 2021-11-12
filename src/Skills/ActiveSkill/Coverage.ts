import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { MaxHealth } from "../../Attributes/PrimaryAttributes/MaxHealth";
import { Strength } from "../../Attributes/PrimaryAttributes/Strength";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { SkillManager } from "../Managers/SkillManager";

export class Coverage
  extends SkillManager
  implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "Coverage";
  private ENERGY_COST: number = 35;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description Coverage";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map([
    [new Strength(), 5],
    [new MaxHealth(), 400],
  ]);
  /**
   *
   */
  constructor(character: BaseCharacterModel) {
    super();
    this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      AttributeModifyType.DEFENSE,
      ValueType.FLAT,
      CharacterClass.WARRIOR,
      this.ENERGY_COST,
      this.DURATION,
      this.BASE_VALUE,
      this.IS_CAST_SELF,
      this.SetCanPurchase(character),
      this.DESCRIPTION,
      this.REQUIREMENTS,
      this.LogicSkill
    );
  }

  LogicSkill(attacker?: BaseCharacterModel): number | void {
    const attackerAttributes = attacker?.Attributes.GetListAttributes();
    attackerAttributes!.Defense.SetValue(
      attackerAttributes!.Defense.GetValue() + this.BASE_VALUE
    );
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
