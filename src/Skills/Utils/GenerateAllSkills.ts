import { BaseCharacterModel } from "../../Character/Model/Base/BaseCharacterModel";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { ClockWork } from "../ActiveSkill/ClockWork";
import { Coverage } from "../ActiveSkill/Coverage";
import { FireBall } from "../ActiveSkill/FireBall";
import { Smash } from "../ActiveSkill/Smash";
import { BaseSkillModel } from "../Models/Base/BaseSkillModel";
import { Regenerate } from "../PassiveSkill/Regenerate";

const ALL_SKILLS: BaseSkillModel[] = [];

const GENERATE_SKILL_BY_CHARACTER_CLASS = {
  WARRIOR: (character: BaseCharacterModel) => GenerateWarriorSkills(character),
  MAGE: (character: BaseCharacterModel) => GenerateMageSkills(character),
};

export const GenerateAllSkills = (
  character: BaseCharacterModel
): BaseSkillModel[] => {
  GenerateCommonSkills(character);

  if (character.Class !== CharacterClass.NONE)
    GENERATE_SKILL_BY_CHARACTER_CLASS[character.Class](character);

  return ALL_SKILLS;
};

const GenerateCommonSkills = (character: BaseCharacterModel): void => {
  ALL_SKILLS.push(new Regenerate().GenerateSkill(character));
  ALL_SKILLS.push(new ClockWork().GenerateSkill(character));
};

const GenerateWarriorSkills = (character: BaseCharacterModel): void => {
  ALL_SKILLS.push(new Smash().GenerateSkill(character));
  ALL_SKILLS.push(new Coverage().GenerateSkill(character));
};

const GenerateMageSkills = (character: BaseCharacterModel): void => {
  ALL_SKILLS.push(new FireBall().GenerateSkill(character));
};
