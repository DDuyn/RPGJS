import { BaseAffixModel } from "../Models/BaseAffixModel";
import { Eldritch } from "../Prefix/Eldritch";
import { Hunters } from "../Prefix/Hunters";
import { Warlords } from "../Prefix/Warlords";
import { OffTheBrute } from "../Suffixes/OffTheBrute";
import { OffTheEagle } from "../Suffixes/OffTheEagle";
import { OffTheEye } from "../Suffixes/OffTheEye";

const ALL_AFFIXES: BaseAffixModel[] = [];

export const GetAllAffixes = (): BaseAffixModel[] => {
  GetAllPrefixes();
  GetAllSuffixes();
  return ALL_AFFIXES;
};

const GetAllPrefixes = (): void => {
  ALL_AFFIXES.push(
    new Eldritch().BuildAffix(),
    new Hunters().BuildAffix(),
    new Warlords().BuildAffix()
  );
};

const GetAllSuffixes = (): void => {
  ALL_AFFIXES.push(
    new OffTheBrute().BuildAffix(),
    new OffTheEagle().BuildAffix(),
    new OffTheEye().BuildAffix()
  );
};
