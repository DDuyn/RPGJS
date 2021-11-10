import { AttributeModifyType } from "../../Shared/Enums/AttributeModifyType";
import { ValueType } from "../../Shared/Enums/ValueType";
import { Utils } from "../../Shared/Utils/Utils";

export abstract class BaseModifier {
  protected Name: string;
  protected Description: string;
  protected AttributeModifyType: AttributeModifyType;
  protected ValueType: ValueType;

  private MinValue: number;
  private MaxValue: number;
  private Tier: number;

  public GetMinValue(): number {
    return this.MinValue;
  }

  public GetMaxValue(): number {
    return this.MaxValue;
  }

  public GetName(): string {
    return this.Name;
  }

  public GetDescription(): string {
    return this.Description;
  }

  public GetAttributeModifyType(): AttributeModifyType {
    return this.AttributeModifyType;
  }

  public GetValueType(): ValueType {
    return this.ValueType;
  }

  public GetTier(): number {
    return this.Tier;
  }

  protected RandomTier(): void {
    this.Tier = Utils.Random(1, 10);
  }

  protected SetMinValue(baseValue: number): void {
    this.MinValue = baseValue * this.Tier;
  }

  protected SetMaxValue(baseValue: number): void {
    this.MaxValue = baseValue * this.Tier;
  }
}
