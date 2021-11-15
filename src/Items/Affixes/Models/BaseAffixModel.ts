import { IModifier } from "../../../Modifiers/Interfaces/IModifier";
import { AffixType } from "../../../Shared/Enums/AffixType";

export type BaseAffixModel = {
  Modifiers: IModifier[];
  AffixType: AffixType;
  Name: string;
};
