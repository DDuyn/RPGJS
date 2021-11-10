import { BaseModifier } from "../../../Modifiers/Base/BaseModifier";
import { Utils } from "../../../Shared/Utils/Utils";
import { BasePrefix } from "../../Affixes/Prefix/Base/BasePrefix";
import { BaseSuffix } from "../../Affixes/Suffixes/Base/BaseSuffix";

let ListPrefix: BasePrefix[] = [];
let ListSuffix: BaseSuffix[] = [];
let explicitModifiersSelected: BaseModifier[] = [];

export const GenerateExplicitsModifers = (
  listPrefixSelected: BasePrefix[],
  listSuffixSelected: BaseSuffix[]
): BaseModifier[] => {
  explicitModifiersSelected = [];
  ListPrefix = [...listPrefixSelected];
  ListSuffix = [...listSuffixSelected];
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

const GetRandomModifierByPrefix = (prefix: BasePrefix): BaseModifier => {
  const listModifier = prefix.GetListModifiers();
  return Utils.GetIndexFromList<BaseModifier>(listModifier);
};

const GetRandomModifierBySuffix = (suffix: BaseSuffix): BaseModifier => {
  const listModifier = suffix.GetListModifiers();
  return Utils.GetIndexFromList<BaseModifier>(listModifier);
};
