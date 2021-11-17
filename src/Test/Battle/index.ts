import "reflect-metadata";
import Container from "typedi";
import { BattleManager } from "../../Battle/Managers/BattleManager";
import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { CharacterManager } from "../../Character/Managers/CharacterManager";
import { CharacterClass } from "../../Shared/Enums/CharacterClass";
import { CharacterType } from "../../Shared/Enums/CharacterType";

const characterManager = Container.get<CharacterManager>(CharacterManager);
const battleManager = Container.get<BattleManager>(BattleManager);

const warrior = characterManager.BuildCharacter(
  "Ragnar",
  CharacterClass.WARRIOR,
  CharacterType.PLAYER
);
const mage = characterManager.BuildCharacter(
  "Merlín",
  CharacterClass.MAGE,
  CharacterType.IA
);

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

console.log("Vida Main", warrior.Attributes);
console.log("Vida Main", mage.Attributes);
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
