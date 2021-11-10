import { BaseModifier } from "../../../Modifiers/Base/BaseModifier";
import { AffixType } from "../../../Shared/Enums/AffixType";

export abstract class BaseAffixes {
  protected ListModifiers: BaseModifier[] = [];
  protected AffixType: AffixType;
  protected Name: string;

  public GetAffixType(): AffixType {
    return this.AffixType;
  }

  public GetListModifiers(): BaseModifier[] {
    return this.ListModifiers;
  }

  public GetName(): string {
    return this.Name;
  }
}
