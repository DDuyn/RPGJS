import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { BaseAttribute } from "../../Base/BaseAttribute";

export abstract class BasePrimaryAttribute extends BaseAttribute {
    constructor () {
        super();
        this.SetTag(AttributeType.PRIMARY_ATTRIBUTE);        
    }
}