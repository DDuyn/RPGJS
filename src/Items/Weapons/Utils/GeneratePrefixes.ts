import { Rarity } from "../../../Shared/Enums/Rarity";
import { Utils } from "../../../Shared/Utils/Utils";
import { BasePrefix } from "../../Affixes/Prefix/Base/BasePrefix";
import { GetAllPrefix } from "../../Affixes/Prefix/Utils/GetAllPrefix";

const GENERATE_RARITY_ITEM = {
  MAGIC: () => GenerateMagicItem(),
  RARE: () => GenerateRareItem(),
  UNIQUE: () => GenerateUniqueItem(),
  LEGENDARY: () => GenerateUniqueItem(),
};

let ListPrefix: BasePrefix[] = [];
let ListPrefixSelected: BasePrefix[] = [];

export const GeneratePrefixes = (rarity: Rarity): BasePrefix[] => {
  ListPrefixSelected = [];
  ListPrefix = [...GetAllPrefix()];
  return GenerateItem(rarity);
};

const GenerateItem = (rarity: Rarity): BasePrefix[] => {
  if (rarity !== Rarity.COMMON) GENERATE_RARITY_ITEM[rarity]();

  return ListPrefixSelected;
};

const GenerateMagicItem = (): void => {
  const totalPrefix = GetTotalExplicits(0, 1);
  if (totalPrefix > 0) SelectRandomPrefix(totalPrefix);
};

const GenerateRareItem = (): void => {
  const totalPrefix = GetTotalExplicits(1, 3);

  SelectRandomPrefix(totalPrefix);
};

const GenerateUniqueItem = (): void => {
  console.log("Unique item");
};

const GetTotalExplicits = (minValue: number, maxValue: number): number => {
  return Utils.Random(minValue, maxValue);
};

const SelectRandomPrefix = (totalPrefix: number): void => {
  for (let index = 0; index < totalPrefix; index++) {
    const prefix = GetRandomPrefix();
    ListPrefixSelected.push(prefix);
    ListPrefix.splice(GetIndexPrefix(prefix), 1);
  }
};

const GetRandomPrefix = (): BasePrefix => {
  return Utils.GetIndexFromList<BasePrefix>(ListPrefix);
};

const GetIndexPrefix = (prefix: BasePrefix): number => {
  return ListPrefix.indexOf(prefix);
};
