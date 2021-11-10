import { BaseSuffix } from "../Base/BaseSuffix";
import { OffTheBrute } from "../OffTheBrute";
import { OffTheEagle } from "../OffTheEagle";
import { OffTheEye } from "../OffTheEye";

export const GetAllSuffix = (): BaseSuffix[] => {
  const listSuffix: BaseSuffix[] = [];
  listSuffix.push(new OffTheBrute(), new OffTheEagle(), new OffTheEye());
  return listSuffix;
};
