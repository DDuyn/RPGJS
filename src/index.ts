import { Battle } from "./Battle/BattleOld";
import { Party } from "./Battle/Party/Party";
import { Mage } from "./Character/Classes/Mage/Mage";
import { Warrior } from "./Character/Classes/Warrior/Warrior";
import { WarriorAttributes } from "./Character/Classes/Warrior/WarriorAttributes";
import { SkillsConstants } from "./Shared/Constants/ConstantsSkills";
import { CharacterType } from "./Shared/Enums/CharacterType";
import { ShopSkill } from "./Shop/ShopSkills";

let ragnar = new Warrior("Ragnar", CharacterType.PLAYER);
const merlin = new Mage("Merlín", CharacterType.PLAYER);
const evil = new Warrior("EvilRagnar", CharacterType.IA);
/*ragnar
  .GetCharacterAttributes()
  .ListAttributes.forEach((tag: AttributeType, attribute: BaseAttribute) => {
    console.log(` ${tag} - ${attribute.GetName()}: ${attribute.GetValue()} `);
  });
*/
console.log(ragnar.GetCharacterName());

let shop = new ShopSkill(ragnar);
let skillShop = shop.GetAllSkillsByCharacter(ragnar.GetCharacterClass());
console.log(skillShop);
shop.PurchaseSkill(skillShop[2]);

console.log(ragnar.GetCharacterSkills().GetSkills());

shop = new ShopSkill(merlin);
const skills = shop.GetAllSkillsByCharacter(merlin.GetCharacterClass());
console.log(skills);

console.log(merlin.GetCharacterSkills().GetSkills());

let skillSelected = ragnar.GetCharacterSkills().GetSkill("Attack");

const party: Party = new Party();
const enemyParty: Party = new Party();
party.AddCharacterToParty(ragnar, true);
party.AddCharacterToParty(merlin, false);

enemyParty.AddCharacterToParty(evil, true);
ragnar
  .GetCharacterSkills()
  .SetPassiveSkill(
    ragnar.GetCharacterSkills().GetSkill(SkillsConstants.REGENERATE_SKILL)
  );
Battle.InitBattle(party, enemyParty);

Battle.SetSkillToBattle(skillSelected, CharacterType.PLAYER);
Battle.SetSkillToBattle(skillSelected, CharacterType.IA);

Battle.Combat();

Battle.SwitchCombatient(
  party.GetCharacterFromParty(merlin.GetCharacterName()),
  CharacterType.PLAYER
);

Battle.SetSkillToBattle(skillSelected, CharacterType.PLAYER);
Battle.SetSkillToBattle(skillSelected, CharacterType.IA);
Battle.Combat();

console.log(
  ragnar.GetCharacterAttributes<WarriorAttributes>().CurrentHealth.GetValue()
);

Battle.EndBattle();

console.log(
  ragnar.GetCharacterAttributes<WarriorAttributes>().CurrentHealth.GetValue()
);

// Seleccionamos Dungeon
// Elegimos Party (Añadir BaseCharacter)
// Ejemplo: Party: [{character: Ragnar, skill: null, position: null}, {character: Merlin, skill: null, position: null}]
// Iniciada la Dungeon: Entramos en Batalla
// Seleccionamos posiciones (Editamos el objeto de Party)
// Ejemplo: Party: [{character: Ragnar, skill: null, position: TOP}, {character: Merlin, skill: null, position: MIDDLE}]
// Método InitBattle (Cargamos Party) !!RANDOMIZAR PARTY ENEMIGA!!
// TURNO X
// Seleccionamos acciones (skills)
// Ejemplo Party: [{character: Ragnar, skill: Attack, position: TOP}, {character: Merlin, skill: Attack, position: MIDDLE}]
//

// Object.setPrototypeOf(loadFile, Warrior.prototype);

//TODO: Mover a modulo de TEST SAVE

/* const datafile = new DataFileUtils();
datafile.SetOwnerDataFile("David");
const characterList: BaseCharacter[] = [];
characterList.push(ragnar);
characterList.push(merlin);
datafile.SetCharacterDataFile(characterList); */

//Save.SaveDataInFile(datafile.GetDataFile());

//TODO: Mover a modulo de TEST LOAD

//const data = Load.LoadDataFromFile("David");

/* const listCharacter: BaseCharacter[] = datafile.ExtractCharacterDataFile(data);
const c = listCharacter.find((x) => x.GetCharacterName() === "Merlín");
console.log(c); */
