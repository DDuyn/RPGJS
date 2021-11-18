import { Constants } from "../../Shared/Constants/Constants";
import { Rarity } from "../../Shared/Enums/Rarity";
import { Utils } from "../../Shared/Utils/Utils";

const GENERATE_RARITY_ITEM = {
  COMMON: (baseDamage: number) => baseDamage,
  MAGIC: (baseDamage: number) =>
    baseDamage + Math.round(baseDamage * Constants.BASE_RARITY_MAGIC),
  RARE: (baseDamage: number) =>
    baseDamage + Math.round(baseDamage * Constants.BASE_RARITY_RARE),
  UNIQUE: (baseDamage: number) =>
    baseDamage + Math.round(baseDamage * Constants.BASE_RARITY_UNIQUE),
  LEGENDARY: (baseDamage: number) =>
    baseDamage + Math.round(baseDamage * Constants.BASE_RARITY_UNIQUE),
};

export const CalculateBaseDamage = (
  baseValue: number,
  level: number,
  rarity: Rarity
): number => {
  const baseDamage = baseValue * level;
  const minDamage = GENERATE_RARITY_ITEM[rarity](baseDamage);
  const maxDamage = minDamage * 2;
  return Utils.Random(minDamage, maxDamage);
};
