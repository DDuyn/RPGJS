import { AffixType } from "../../../../Shared/Enums/AffixType";
import { BaseAffixModel } from "../../Models/BaseAffixModel";
import { GetAllAffixes } from "../../Utils/GetAllAffixes";

export const GetAllSuffix = (): BaseAffixModel[] => {
  return GetAllAffixes().filter(
    (affix) => affix.AffixType === AffixType.PREFIX
  );
};
