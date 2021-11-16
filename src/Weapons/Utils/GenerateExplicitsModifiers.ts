import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";
import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { BaseModifierModel } from "../../Modifiers/Model/Base/BaseModifierModel";
import { Utils } from "../../Shared/Utils/Utils";

let ListPrefix: BaseAffixModel[] = [];
let ListSuffix: BaseAffixModel[] = [];
let explicitModifiersSelected: BaseModifierModel[] = [];

export const GenerateExplicitsModifers = (
  prefixes: BaseAffixModel[],
  suffixes: BaseAffixModel[]
): BaseModifierModel[] => {
  explicitModifiersSelected = [];
  ListPrefix = [...prefixes];
  ListSuffix = [...suffixes];
  SelectRandomPrefixModifier();
  SelectRandomSuffixModifier();
  return explicitModifiersSelected;
};

const SelectRandomPrefixModifier = (): void => {
  ListPrefix.forEach((prefix) => {
    const modifier = GetRandomModifierByPrefix(prefix);
    explicitModifiersSelected.push(modifier);
  });
};

const SelectRandomSuffixModifier = (): void => {
  ListSuffix.forEach((suffix) => {
    const modifier = GetRandomModifierBySuffix(suffix);
    explicitModifiersSelected.push(modifier);
  });
};

const GetRandomModifierByPrefix = (
  prefix: BaseAffixModel
): BaseModifierModel => {
  return Utils.GetIndexFromList<IModifier>(prefix.Modifiers).BuildModifier();
};

const GetRandomModifierBySuffix = (
  suffix: BaseAffixModel
): BaseModifierModel => {
  return Utils.GetIndexFromList<IModifier>(suffix.Modifiers).BuildModifier();
};
