import { BaseAttributeModel } from "../../../Attributes/Models/Base/BaseAttributeModel";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";

export type BaseCharacterModel = {
  name: string;
  class: CharacterClass;
  type: CharacterType;
  attributes: BaseAttributeModel;
};
