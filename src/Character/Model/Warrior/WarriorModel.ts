import { BaseAttribute } from "../../../Attributes/Base/BaseAttribute";
import { BaseCharacterModel } from "../Base/BaseCharacterModel";

export interface WarriorModel extends BaseCharacterModel {
  warriorAttributes: BaseAttribute[];
}
