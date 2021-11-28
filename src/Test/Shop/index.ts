import { Warrior } from "../../Character/PlayerCharacters/Warrior/Warrior";
import { GenerateAllSkills } from "../../Skills/Utils/GenerateAllSkills";

const ragnar = new Warrior("Ragnar");

let skillsShop = GenerateAllSkills(ragnar);
console.log("Primera tienda", skillsShop);
const skill = skillsShop.find((s) => s.GetName() === "Regenerate");
ragnar.PurchaseSkill(skill!);

skillsShop = GenerateAllSkills(ragnar);
console.log("Segunda tienda", skillsShop);
