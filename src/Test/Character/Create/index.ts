import "reflect-metadata";
import { Container } from "typedi";
import { CharacterManager } from "../../../Character/Managers/CharacterManager";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";

const characterManager = Container.get<CharacterManager>(CharacterManager);

const ragnar = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);

ragnar.DoSkill(ragnar.SkillManager.GetSkill("Attack"), ragnar);
