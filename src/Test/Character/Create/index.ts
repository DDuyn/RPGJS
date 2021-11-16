import "reflect-metadata";
import { Container } from "typedi";
import { AttributeConstants } from "../../../Attributes/Constants/AttributeConstants";
import { CharacterManager } from "../../../Character/Managers/CharacterManager";
import { CharacterClass } from "../../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../../Shared/Enums/CharacterType";

const characterManager = Container.get<CharacterManager>(CharacterManager);

const ragnar = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);

console.log(ragnar.AttributeManager.GetListAttributes());

const skillsInShop =
  ragnar.SkillManager.GetSkillsForShoppingByCharacter(ragnar);
const skillCart = skillsInShop.find((s) => s.Name === "Coverage")!;

skillCart.CanPurchase
  ? ragnar.SkillManager.AddSkill(skillCart)
  : console.log("No puedo comprar");

console.log(
  "Antes",
  ragnar.AttributeManager.GetValueByAttribute(AttributeConstants.DEFENSE)
);
ragnar.DoSkill(ragnar.SkillManager.GetSkill("Coverage"));
console.log(
  "Final",
  ragnar.AttributeManager.GetValueByAttribute(AttributeConstants.DEFENSE)
);
