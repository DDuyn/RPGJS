import { Constants } from "../../Shared/Constants/Constants";
import { AttributeType } from "../../Shared/Enums/AttributeType";

export abstract class BaseAttribute {

    private value: number = 0;

    private Tag: AttributeType = AttributeType.UNTAG; 

    private Name: string = Constants.STRING_EMPY;

    public GetValue(): number {
        return this.value;
    }

    public SetValue(value: number): void {
        this.value = value;
    }

    public GetTag(): AttributeType {
        return this.Tag;
    }

    public GetName(): string {
        return this.Name;
    }

    protected SetTag(tag: AttributeType): void {
        this.Tag = tag;
    }

    protected SetName(name: string): void {
        this.Name = name;
    }
}