import { Rarity } from "../../../Shared/Enums/Rarity";
import { Utils } from "../../../Shared/Utils/Utils";
import { BasePrefix } from "../../Affixes/Prefix/Base/BasePrefix";
import { BaseSuffix } from "../../Affixes/Suffixes/Base/BaseSuffix";
import { GetAllSuffix } from "../../Affixes/Suffixes/Utils/GetAllSuffix";

const GENERATE_RARITY_ITEM = {
  MAGIC: () => GenerateMagicItem(),
  RARE: () => GenerateRareItem(),
  UNIQUE: () => GenerateUniqueItem(),
  LEGENDARY: () => GenerateUniqueItem(),
};

let ListSuffix: BaseSuffix[] = [];
let ListSuffixSelected: BaseSuffix[] = [];
let ListPrefixSelected: BasePrefix[] = [];

export const GenerateSuffixes = (
  rarity: Rarity,
  listPrefixes: BasePrefix[]
): BaseSuffix[] => {
  ListSuffixSelected = [];
  ListPrefixSelected = [...listPrefixes];
  ListSuffix = [...GetAllSuffix()];
  return GenerateItem(rarity);
};

const GenerateItem = (rarity: Rarity): BaseSuffix[] => {
  if (rarity !== Rarity.COMMON) GENERATE_RARITY_ITEM[rarity]();

  return ListSuffixSelected;
};

const GenerateMagicItem = (): void => {
  const totalSuffix =
    ListPrefixSelected.length > 0 ? GetTotalExplicits(0, 1) : 1;
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

const GetRandomSuffix = (): BaseSuffix => {
  return Utils.GetIndexFromList<BaseSuffix>(ListSuffix);
};

const GetIndexSuffix = (suffix: BaseSuffix): number => {
  return ListSuffix.indexOf(suffix);
};
