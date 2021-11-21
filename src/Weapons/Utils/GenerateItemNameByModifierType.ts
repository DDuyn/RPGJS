import { IAffix } from "../../Affixes/Interfaces/IAffix";
import { AffixType } from "../../Shared/Enums/AffixType";
import { Rarity } from "../../Shared/Enums/Rarity";

let ListPrefix: IAffix[] = [];
let ListSuffix: IAffix[] = [];

export const GenerateItemName = (
  baseItemName: string,
  listPrefixSelected: IAffix[],
  listSuffixSelected: IAffix[],
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
  if (type === AffixType.PREFIX)
    return ListPrefix[0]?.GetData().Name || undefined;
  else return ListSuffix[0]?.GetData().Name || undefined;
};

const GenerateRareItemName = (): string => {
  //TODO: Lista de nombres
  const ListNames = ["Swooord", "Also Sword"];
  return ListNames[Math.floor(Math.random() * ListNames.length)];
};
