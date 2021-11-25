import { AttributeConstants } from "../../Attributes/Constants/AttributeConstants";
import { Battle } from "../../Battle/Battle";
import { CharacterInBattleModel } from "../../Battle/Models/CharacterInBattleModel";
import { Mage } from "../../Character/Model/Mage/Mage";
import { Warrior } from "../../Character/Model/Warrior/Warrior";
import { Party } from "../../Party/Party";
import { CharacterType } from "../../Shared/Enums/CharacterType";
import { Regenerate } from "../../Skills/PassiveSkill/Regenerate";

const warrior = new Warrior("Ragnar", CharacterType.PLAYER);
const mage = new Mage("Merlín", CharacterType.IA);
const regenerate = new Regenerate(warrior);

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

console.log(
  warrior.GetData().Name,
  warrior.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);

console.log(
  mage.GetData().Name,
  mage.GetValueByAttribute(AttributeConstants.CURRENTHEALTH)
);

warrior.PurchaseSkill(regenerate);

const battle = new Battle();
const party = new Party();

const partyPlayer = party.CreateParty([playerInBattle]);
const partyEnemy = party.CreateParty([enemyInBattle]);

battle.InitBattle(partyPlayer, partyEnemy);
battle.SetSkill(warrior.GetSkill("Attack"), warrior.GetData().Type);
battle.SetSkill(mage.GetSkill("Attack"), mage.GetData().Type);
battle.Combat();
battle.EndBattle();

console.log(
  "Vida Main before",
  warrior.GetData().Name,
  warrior.GetValueByAttribute(AttributeConstants.CURRENTHEALTH),
  warrior.GetValueByAttribute(AttributeConstants.TOTALEXPERIENCE)
);
console.log(
  "Vida Main before",
  mage.GetData().Name,
  mage.GetValueByAttribute(AttributeConstants.CURRENTHEALTH),
  mage.GetValueByAttribute(AttributeConstants.TOTALEXPERIENCE)
);

partyPlayer.LootParty?.Weapons?.forEach((w) => console.log(w.GetData()));
