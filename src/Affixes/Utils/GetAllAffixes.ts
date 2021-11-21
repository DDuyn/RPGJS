import { IAffix } from "../Interfaces/IAffix";
import { Eldritch } from "../Prefix/Eldritch";
import { Hunters } from "../Prefix/Hunters";
import { Warlords } from "../Prefix/Warlords";
import { OffTheBrute } from "../Suffixes/OffTheBrute";
import { OffTheEagle } from "../Suffixes/OffTheEagle";
import { OffTheEye } from "../Suffixes/OffTheEye";

const ALL_AFFIXES: IAffix[] = [];

export const GetAllAffixes = (): IAffix[] => {
  GetAllPrefixes();
  GetAllSuffixes();
  return ALL_AFFIXES;
};

const GetAllPrefixes = (): void => {
  ALL_AFFIXES.push(new Eldritch(), new Hunters(), new Warlords());
};

const GetAllSuffixes = (): void => {
  ALL_AFFIXES.push(new OffTheBrute(), new OffTheEagle(), new OffTheEye());
};
