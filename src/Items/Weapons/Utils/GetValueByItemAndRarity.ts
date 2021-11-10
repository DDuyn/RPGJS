import { Constants } from "../../../Shared/Constants/Constants";
import { Rarity } from "../../../Shared/Enums/Rarity";

const GENERATE_RARITY_ITEM = {
  MAGIC: (baseValueLevel: number) =>
    baseValueLevel + Math.round(baseValueLevel * Constants.BASE_RARITY_MAGIC),
  RARE: (baseValueLevel: number) =>
    baseValueLevel + Math.round(baseValueLevel * Constants.BASE_RARITY_RARE),
  UNIQUE: (baseValueLevel: number) =>
    baseValueLevel + Math.round(baseValueLevel * Constants.BASE_RARITY_UNIQUE),
  LEGENDARY: (baseValueLevel: number) =>
    baseValueLevel + Math.round(baseValueLevel * Constants.BASE_RARITY_UNIQUE),
};

export const GetValueByItemAndRarity = (
  baseValue: number,
  level: number,
  rarity: Rarity
): number => {
  const baseValueLevel: number = baseValue * level;

  if (rarity !== Rarity.COMMON)
    return GENERATE_RARITY_ITEM[rarity](baseValueLevel);

  return baseValueLevel;
};
