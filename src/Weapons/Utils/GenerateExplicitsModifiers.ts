import { IAffix } from "../../Affixes/Interfaces/IAffix";
import { IModifier } from "../../Modifiers/Interfaces/IModifier";
import { Utils } from "../../Shared/Utils/Utils";

let ListPrefix: IAffix[] = [];
let ListSuffix: IAffix[] = [];
let explicitModifiersSelected: IModifier[] = [];

export const GenerateExplicitsModifers = (
  prefixes: IAffix[],
  suffixes: IAffix[]
): IModifier[] => {
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

const GetRandomModifierByPrefix = (prefix: IAffix): IModifier => {
  return Utils.GetRandomElementFromList<IModifier>(prefix.GetData().Modifiers);
};

const GetRandomModifierBySuffix = (suffix: IAffix): IModifier => {
  return Utils.GetRandomElementFromList<IModifier>(suffix.GetData().Modifiers);
};
