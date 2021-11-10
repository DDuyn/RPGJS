import { AffixType } from "../../../../Shared/Enums/AffixType";
import { BaseAffixes } from "../../Base/BaseAffixes";

export abstract class BaseSuffix extends BaseAffixes {
  /**
   *
   */
  constructor() {
    super();
    this.AffixType = AffixType.SUFFIX;
  }
}
