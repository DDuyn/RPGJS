import { Inject, Service } from "typedi";
import { BaseAttributeModel } from "../../../../../Attributes/Models/Base/BaseAttributeModel";
import { Dextery } from "../../../../../Attributes/PrimaryAttributes/Dextery";
import { Intelligence } from "../../../../../Attributes/PrimaryAttributes/Intelligence";
import { CharacterAttributesManager } from "../../Character/Managers/CharacterAttributesManager";
import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { SkillType } from "../../Shared/Enums/SkillType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { SkillManager } from "../Managers/SkillManager";

@Service()
export class FireBall {
  /**
   *
   */
  constructor(
    @Inject() private readonly skillManager: SkillManager,
    private readonly characterAttributesManager: CharacterAttributesManager
  ) {
    const canPurchase = this.skillManager.SetCanPurchase(
      characterAttributesManager
    );
    this.skillManager.BuildSkill(
      "FireBall",
      SkillType.ACTIVE_SKILL,
      AttributeModifyType.NONE,
      ValueType.FLAT,
      CharacterClass.MAGE,
      15,
      0,
      40,
      false,
      canPurchase,
      "Invoke ball of fire",
      this.SetRequirements()
    );
  }

  protected LogicSkill(
    attackerAttributes?: BaseAttributeModel,
    defenderAttributes?: BaseAttributeModel
  ): number | void {
    console.log(attackerAttributes);
    console.log(defenderAttributes);
  }

  protected SetRequirements(): void {
    this.GetRequeriments().set(new Intelligence(), 20);
    this.GetRequeriments().set(new Dextery(), 10);
  }

  protected UpgradeSkill(): void {
    throw new Error("Method not implemented.");
  }
}
