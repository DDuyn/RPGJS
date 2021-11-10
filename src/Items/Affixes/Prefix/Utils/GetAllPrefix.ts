import { BasePrefix } from "../Base/BasePrefix";
import { Eldritch } from "../Eldritch";
import { Hunters } from "../Hunters";
import { Warlords } from "../Warlords";

export const GetAllPrefix = (): BasePrefix[] => {
  const listPrefix: BasePrefix[] = [];
  listPrefix.push(new Warlords(), new Eldritch(), new Hunters());
  return listPrefix;
};
