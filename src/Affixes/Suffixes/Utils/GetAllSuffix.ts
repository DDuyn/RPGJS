import { AffixType } from "../../../Shared/Enums/AffixType";
import { IAffix } from "../../Interfaces/IAffix";
import { GetAllAffixes } from "../../Utils/GetAllAffixes";

export const GetAllSuffix = (): IAffix[] => {
  return GetAllAffixes().filter(
    (affix) => affix.GetData().AffixType === AffixType.SUFFIX
  );
};
