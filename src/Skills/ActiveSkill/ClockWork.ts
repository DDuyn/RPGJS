import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { Agility } from "../../Attributes/BattleAttributes/Agility";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { SkillManager } from "../Managers/SkillManager";

export class ClockWork
  extends SkillManager
  implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "ClockWork";
  private ENERGY_COST: number = 20;
  private DURATION: number = 0;
  private BASE_VALUE: number = 0.1;
  private IS_CAST_SELF: boolean = true;
  private DESCRIPTION: string = "Description ClockWork";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map([
    [new Agility(), 25],
  ]);
  /**
   *
   */
  constructor(character: BaseCharacterModel) {
    super();
    this.BuildSkill(
      this.NAME,
      SkillType.ACTIVE_SKILL,
      AttributeModifyType.NONE,
      ValueType.PERCENT,
      CharacterClass.NONE,
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
  LogicSkill(attacker: BaseCharacterModel): number | void {
    const attackerAttributes = attacker!.Attributes.GetListAttributes();
    const agility = attackerAttributes.Agility.GetValue();
    const agilityModified = agility + Math.round(agility * this.BASE_VALUE);
    attackerAttributes.Agility.SetValue(agilityModified);
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
