import { IAffix } from "../../Affixes/Interfaces/IAffix";
import { GetAllSuffix } from "../../Affixes/Suffixes/Utils/GetAllSuffix";
import { Rarity } from "../../Shared/Enums/Rarity";
import { Utils } from "../../Shared/Utils/Utils";

const GENERATE_RARITY_ITEM = {
  MAGIC: (hasPrefix: boolean) => GenerateMagicItem(hasPrefix),
  RARE: () => GenerateRareItem(),
  UNIQUE: () => GenerateUniqueItem(),
  LEGENDARY: () => GenerateUniqueItem(),
};

let ListSuffix: IAffix[] = [];
let ListSuffixSelected: IAffix[] = [];

export const GenerateSuffixes = (
  rarity: Rarity,
  hasPrefix: boolean
): IAffix[] => {
  ListSuffixSelected = [];
  ListSuffix = [...GetAllSuffix()];
  return GenerateItem(rarity, hasPrefix);
};

const GenerateItem = (rarity: Rarity, hasPrefix: boolean): IAffix[] => {
  if (rarity !== Rarity.COMMON) GENERATE_RARITY_ITEM[rarity](hasPrefix);

  return ListSuffixSelected;
};

const GenerateMagicItem = (hasPrefix: boolean): void => {
  const totalSuffix = hasPrefix ? 1 : GetTotalExplicits(0, 1);
  if (totalSuffix > 0) SelectRandomSuffix(totalSuffix);
};

const GenerateRareItem = (): void => {
  const totalSuffix = GetTotalExplicits(1, 3);

  SelectRandomSuffix(totalSuffix);
};

const GenerateUniqueItem = (): void => {
  console.log("Unique item");
};

const GetTotalExplicits = (minValue: number, maxValue: number): number => {
  return Utils.Random(minValue, maxValue);
};

const SelectRandomSuffix = (totalSuffix: number): void => {
  for (let index = 0; index < totalSuffix; index++) {
    const suffix = GetRandomSuffix();
    ListSuffixSelected.push(suffix);
    ListSuffix.splice(GetIndexSuffix(suffix), 1);
  }
};

const GetRandomSuffix = (): IAffix => {
  return Utils.GetRandomElementFromList<IAffix>(ListSuffix);
};

const GetIndexSuffix = (suffix: IAffix): number => {
  return Utils.GetIndexFromList<IAffix>(ListSuffix, suffix);
};
