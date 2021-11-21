import { AffixType } from "../../../Shared/Enums/AffixType";
import { IAffix } from "../../Interfaces/IAffix";
import { GetAllAffixes } from "../../Utils/GetAllAffixes";

export const GetAllPrefix = (): IAffix[] => {
  return GetAllAffixes().filter(
    (affix) => affix.GetData().AffixType === AffixType.PREFIX
  );
};
