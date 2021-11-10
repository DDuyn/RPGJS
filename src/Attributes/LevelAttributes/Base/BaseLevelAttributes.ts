import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { BaseAttribute } from "../../Base/BaseAttribute";

export abstract class BaseLevelAttributes extends BaseAttribute {
    /**
     *
     */
    constructor() {
        super();
        this.SetTag(AttributeType.LEVEL_ATTRIBUTE);
    }
}