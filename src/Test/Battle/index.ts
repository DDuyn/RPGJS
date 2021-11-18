import "reflect-metadata";
import Container from "typedi";
import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { BattleManager } from "../../Battle/Managers/BattleManager";
import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { Mage } from "../../Character/Model/Mage/Mage";
import { Warrior } from "../../Character/Model/Warrior/Warrior";
import { CharacterType } from "../../Shared/Enums/CharacterType";

const battleManager = Container.get<BattleManager>(BattleManager);

const warrior = new Warrior("Ragnar", CharacterType.PLAYER);
const warrior1 = new Warrior("Ragnar 1", CharacterType.PLAYER);

const mage = new Mage("Merlín", CharacterType.IA);

const playerInBattle: CharacterInBattleModel = {
  Character: warrior,
  IsStarter: true,
  IsCombat: true,
  IsDead: false,
};

const enemyInBattle: CharacterInBattleModel = {
  Character: mage,
  IsStarter: true,
  IsCombat: true,
  IsDead: false,
};

console.log(warrior.GetData().Name, warrior.GetData().Attributes);
console.log(warrior1.GetData().Name, warrior1.GetData().Attributes);
console.log(mage.GetData().Name, mage.GetData().Attributes);

console.log(
  warrior.GetData().Name,
  warrior.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);

console.log(
  mage.GetData().Name,
  mage.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);

warrior.SetValueInAttribute(999, AttributeConstants.CURRENTHEALTH);

console.log(
  warrior.GetData().Name,
  warrior.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);
/*
const partyPlayer: PartyModel = { Characters: [playerInBattle] };
const partyEnemy: PartyModel = { Characters: [enemyInBattle] };

battleManager.InitBattle(partyPlayer, partyEnemy);
partyPlayer.Characters[0].Skill = warrior.SkillManager.GetSkill("Attack");
partyEnemy.Characters[0].Skill = mage.SkillManager.GetSkill("Attack");
battleManager.Combat();

console.log(
  "Vida Main before",
  warrior.AttributeManager.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);
console.log(
  "Vida Main before",
  warrior.AttributeManager.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);
*/
