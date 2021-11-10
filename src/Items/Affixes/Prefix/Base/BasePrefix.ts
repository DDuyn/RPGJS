import { AffixType } from "../../../../Shared/Enums/AffixType";
import { BaseAffixes } from "../../Base/BaseAffixes";

export abstract class BasePrefix extends BaseAffixes {
  /**
   *
   */
  constructor() {
    super();
    this.AffixType = AffixType.PREFIX;
  }
}
