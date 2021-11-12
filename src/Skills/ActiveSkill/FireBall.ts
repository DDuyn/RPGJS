import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { Dextery } from "../../Attributes/PrimaryAttributes/Dextery";
import { Intelligence } from "../../Attributes/PrimaryAttributes/Intelligence";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { SkillManager } from "../Managers/SkillManager";

export class FireBall
  extends SkillManager
  implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "FireBall";
  private ENERGY_COST: number = 15;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description FireBall";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map([
    [new Intelligence(), 20],
    [new Dextery(), 20],
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
      ValueType.FLAT,
      CharacterClass.MAGE,
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

  LogicSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void {
    console.log(attacker);
    console.log(defender);
  }

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
