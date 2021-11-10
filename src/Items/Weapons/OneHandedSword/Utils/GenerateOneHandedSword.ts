import { Rarity } from "../../../../Shared/Enums/Rarity";
import { Utils } from "../../../../Shared/Utils/Utils";
import { BaseWeapon } from "../../Base/BaseWeapon";
import { CopperSword } from "../CopperSword";
import { OneHandedSwordType } from "../Enums/OneHandedSwordType";
import { RustedSword } from "../RustedSword";

const ONE_HANDED_SWORD = {
  COPPER_SWORD: (level: number, rarity: Rarity) =>
    new CopperSword(level, rarity),
  RUSTED_SWORD: (level: number, rarity: Rarity) =>
    new RustedSword(level, rarity),
};

export const GenerateOneHandedSword = (
  level: number,
  rarity: Rarity
): BaseWeapon => {
  const oneHandedSwordWeapon = Utils.GetRandomEnumKey<OneHandedSwordType>(
    OneHandedSwordType
  );
  return ONE_HANDED_SWORD[oneHandedSwordWeapon](level, rarity);
};
