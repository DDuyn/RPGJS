import "reflect-metadata";
import Container from "typedi";
import { CharacterManager } from "../../Character/Managers/CharacterManager";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { ShopSkill } from "../../Shop/ShopSkills";

const characterManager = Container.get<CharacterManager>(CharacterManager);

const ragnar = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);

let shop = new ShopSkill(ragnar);
let skillshop = shop.GetAllSkillsByCharacter(ragnar.Class);
console.log("Skill Shop 1", skillshop[1]);
shop.PurchaseSkill(skillshop[1]);
console.log("Ragnar Shop 1", ragnar.Skills.GetSkills());
console.log("--------------TEST----------");
shop = new ShopSkill(ragnar);
skillshop = shop.GetAllSkillsByCharacter(ragnar.Class);
console.log(skillshop);
console.log(ragnar.Skills.GetSkills());
