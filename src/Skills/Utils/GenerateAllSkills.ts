import { ICharacter } from "../../Character/Interfaces/ICharacter";
import { ClockWork } from "../ActiveSkill/ClockWork";
import { Coverage } from "../ActiveSkill/Coverage";
import { FireBall } from "../ActiveSkill/FireBall";
import { Smash } from "../ActiveSkill/Smash";
import { ISkill } from "../Interfaces/ISkill";
import { Regenerate } from "../PassiveSkill/Regenerate";

const ALL_SKILLS: ISkill[] = [];

const GENERATE_SKILL_BY_CHARACTER_CLASS = {
  NONE: () => new Error("Cannot be NONE of character class"),
  WARRIOR: (character: ICharacter) => GenerateWarriorSkills(character),
  MAGE: (character: ICharacter) => GenerateMageSkills(character),
};

export const GenerateAllSkills = (character: ICharacter): ISkill[] => {
  GenerateCommonSkills(character);
  GENERATE_SKILL_BY_CHARACTER_CLASS[character.GetData().Class](character);

  return ALL_SKILLS;
};

const GenerateCommonSkills = (character: ICharacter): void => {
  ALL_SKILLS.push(new Regenerate(character));
  ALL_SKILLS.push(new ClockWork(character));
};

const GenerateWarriorSkills = (character: ICharacter): void => {
  ALL_SKILLS.push(new Smash(character));
  ALL_SKILLS.push(new Coverage(character));
};

const GenerateMageSkills = (character: ICharacter): void => {
  ALL_SKILLS.push(new FireBall(character));
};
