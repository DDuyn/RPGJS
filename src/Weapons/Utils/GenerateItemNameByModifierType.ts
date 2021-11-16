import { BaseAffixModel } from "../../Affixes/Models/BaseAffixModel";
import { AffixType } from "../../Shared/Enums/AffixType";
import { Rarity } from "../../Shared/Enums/Rarity";

let ListPrefix: BaseAffixModel[] = [];
let ListSuffix: BaseAffixModel[] = [];

export const GenerateItemName = (
  baseItemName: string,
  listPrefixSelected: BaseAffixModel[],
  listSuffixSelected: BaseAffixModel[],
  rarity: Rarity
): string => {
  ListPrefix = [...listPrefixSelected];
  ListSuffix = [...listSuffixSelected];

  if (rarity === Rarity.RARE) return GenerateRareItemName();
  if (rarity === Rarity.MAGIC) return GenerateMagicItemName(baseItemName);
  //TODO: Generate Name for Unique Items

  return baseItemName;
};

const GenerateMagicItemName = (baseItemName: string): string => {
  const preffixName = GetNameByModifierType(AffixType.PREFIX);
  const suffixName = GetNameByModifierType(AffixType.SUFFIX);

  if (!!preffixName && !!suffixName)
    return `${preffixName} ${baseItemName} ${suffixName}`;
  if (!!preffixName && suffixName === undefined)
    return `${preffixName} ${baseItemName}`;
  if (!!suffixName && preffixName === undefined)
    return `${baseItemName} ${suffixName}`;

  return baseItemName;
};

const GetNameByModifierType = (type: AffixType): string | undefined => {
  if (type === AffixType.PREFIX) return ListPrefix[0]?.Name || undefined;
  else return ListSuffix[0]?.Name || undefined;
};

const GenerateRareItemName = (): string => {
  //TODO: Lista de nombres
  const ListNames = ["Swooord", "Also Sword"];
  return ListNames[Math.floor(Math.random() * ListNames.length)];
};
