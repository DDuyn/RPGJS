import { IAttribute } from "../../Attributes/Interfaces/IAttribute";
import { ISkill } from "../../Skills/Interfaces/ISkill";

export const FindAttributeByName = (
  attributeName: string,
  attribute: IAttribute
): boolean => attribute.GetName() === attributeName;

export const FindSkillByName = (skillName: string, skill: ISkill): boolean =>
  skill.GetName() === skillName;
