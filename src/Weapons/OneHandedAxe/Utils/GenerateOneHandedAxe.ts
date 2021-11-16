import { Rarity } from "../../../Shared/Enums/Rarity";
import { Utils } from "../../../Shared/Utils/Utils";
import { BaseWeaponModel } from "../../Models/BaseWeaponModel";
import { OneHandedAxeType } from "../Enums/OneHandedAxeType";
import { RustedHatched } from "../RustedHatched";

const ONE_HANDED_AXE = {
  RUSTED_HATCHED: (level: number, rarity: Rarity) =>
    new RustedHatched().BuildWeapon(level, rarity),
};

export const GenerateOneHandedAxe = (
  level: number,
  rarity: Rarity
): BaseWeaponModel => {
  const oneHandedAxeWeapon =
    Utils.GetRandomEnumKey<OneHandedAxeType>(OneHandedAxeType);
  return ONE_HANDED_AXE[oneHandedAxeWeapon](level, rarity);
};
