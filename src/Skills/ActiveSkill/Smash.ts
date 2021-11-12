import { BaseAttribute } from "../../Attributes/Base/BaseAttribute";
import { Strength } from "../../Attributes/PrimaryAttributes/Strength";
import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { ILogicSkill } from "../Interfaces/ILogicSkill";
import { IUpgradeSkill } from "../Interfaces/IUpgradeSkill";
import { SkillManager } from "../Managers/SkillManager";

export class Smash extends SkillManager implements ILogicSkill, IUpgradeSkill {
  private NAME: string = "Smash";
  private ENERGY_COST: number = 25;
  private DURATION: number = 0;
  private BASE_VALUE: number = 40;
  private IS_CAST_SELF: boolean = false;
  private DESCRIPTION: string = "Description Smash";
  private REQUIREMENTS: Map<BaseAttribute, number> = new Map([
    [new Strength(), 8],
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

  UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }

  LogicSkill(
    attacker: BaseCharacterModel,
    defender?: BaseCharacterModel
  ): number | void {
    console.log(attacker);
    console.log(defender);
  }
}
