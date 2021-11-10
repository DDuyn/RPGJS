import { Warrior } from "../../Character/Classes/Warrior/Warrior";
import { WarriorAttributes } from "../../Character/Classes/Warrior/WarriorAttributes";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { ShopSkill } from "../../Shop/ShopSkills";

const ragnar = new Warrior("Ragnar", CharacterType.PLAYER);
let shop = new ShopSkill(ragnar);
let skillshop = shop.GetAllSkillsByCharacter(ragnar.GetCharacterClass());
shop.PurchaseSkill(skillshop[1]);
console.log("--------------TEST----------");
ragnar.GetCharacterAttributes<WarriorAttributes>().Fury.SetValue(60);
shop = new ShopSkill(ragnar);
skillshop = shop.GetAllSkillsByCharacter(ragnar.GetCharacterClass());
console.log(skillshop);
console.log(ragnar.GetCharacterSkills().GetSkills());
