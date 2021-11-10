import { AttributeType } from "../../../Shared/Enums/AttributeType";
import { BaseAttribute } from "../../Base/BaseAttribute";

export abstract class BaseBattleAttribute extends BaseAttribute {
    /**
     *
     */
    constructor() {        
        super();
        this.SetTag(AttributeType.BATTLE_ATTRIBUTE);
    }
}