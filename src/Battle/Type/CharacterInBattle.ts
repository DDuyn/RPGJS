import { BaseCharacter } from "../../Character/Base/BaseCharacter";
import { BaseSkill } from "../../Skills/Base/BaseSkill";

export type CharacterInBattle = {
  character: BaseCharacter;
  skill?: BaseSkill;
  isStarter: boolean;
  isDead: boolean;
  isCombat: boolean;
};
