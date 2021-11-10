import { Rarity } from "../../../../Shared/Enums/Rarity";
import { Utils } from "../../../../Shared/Utils/Utils";
import { BaseWeapon } from "../../Base/BaseWeapon";
import { OneHandedAxeType } from "../Enums/OneHandedAxeType";
import { RustedHatched } from "../RustedHatched";

const ONE_HANDED_AXE = {
  RUSTED_HATCHED: (level: number, rarity: Rarity) =>
    new RustedHatched(level, rarity),
};

export const GenerateOneHandedAxe = (
  level: number,
  rarity: Rarity
): BaseWeapon => {
  const oneHandedAxeWeapon = Utils.GetRandomEnumKey<OneHandedAxeType>(
    OneHandedAxeType
  );
  return ONE_HANDED_AXE[oneHandedAxeWeapon](level, rarity);
};
