import { AffixType } from "../../../Shared/Enums/AffixType";
import { Rarity } from "../../../Shared/Enums/Rarity";
import { BasePrefix } from "../../Affixes/Prefix/Base/BasePrefix";
import { BaseSuffix } from "../../Affixes/Suffixes/Base/BaseSuffix";

let ListPrefix: BasePrefix[] = [];
let ListSuffix: BaseSuffix[] = [];

export const GenerateItemName = (
  baseItemName: string,
  listPrefixSelected: BasePrefix[],
  listSuffixSelected: BaseSuffix[],
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
  if (type === AffixType.PREFIX) return ListPrefix[0]?.GetName() || undefined;
  else return ListSuffix[0]?.GetName() || undefined;
};

const GenerateRareItemName = (): string => {
  //TODO: Lista de nombres
  const ListNames = ["Swooord", "Also Sword"];
  return ListNames[Math.floor(Math.random() * ListNames.length)];
};
