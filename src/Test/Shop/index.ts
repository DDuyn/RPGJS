import "reflect-metadata";
import Container from "typedi";
import { CharacterManager } from "../../Character/Managers/CharacterManager";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { SkillManager } from "../../Skills/Managers/SkillManager";

const characterManager = Container.get<CharacterManager>(CharacterManager);
const skillManager = Container.get<SkillManager>(SkillManager);

const ragnar = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);

const skillsInShop = skillManager.GetSkillsForShoppingByCharacter(ragnar);
const skillCart = skillsInShop.find((s) => s.Name === "Smash")!;

console.log(skillsInShop);

skillCart.CanPurchase
  ? ragnar.SkillManager.AddSkill(skillCart)
  : console.log("No puedo comprar");
console.log(ragnar.SkillManager.GetSkills());
