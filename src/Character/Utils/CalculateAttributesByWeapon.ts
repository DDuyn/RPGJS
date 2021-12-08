import { Attributes } from "../../Attributes/Constants/Attributes";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";
import { ICharacter } from "../Interfaces/ICharacter";

let CHARACTER: ICharacter;
let WEAPON: IWeapon;

export const CalculateAttributesByWeapon = (
  character: ICharacter,
  weapon: IWeapon
): void => {
  CHARACTER = character;
  WEAPON = weapon;
  console.log(weapon.GetData().Damage);
  console.log(weapon.GetData().Implicits);
  console.log(weapon.GetData().Explicits);
  CalculateDamage();
  CalculateImplicits();
  CalculateExplicits();
};

const CalculateDamage = (): void => {
  const characterDamage = CHARACTER.GetValueByAttribute(Attributes.DAMAGE);
  const weaponDamage = WEAPON.GetData().Damage;
  CHARACTER.SetValueInAttribute(
    characterDamage + weaponDamage,
    Attributes.DAMAGE
  );
};

const CalculateImplicits = (): void => {
  if (WEAPON.HasImplicits())
    WEAPON.GetData().Implicits.forEach((i) => i.Apply(CHARACTER));
};

const CalculateExplicits = (): void => {
  if (WEAPON.HasExplicits())
    WEAPON.GetData().Explicits.forEach((i) => i.Apply(CHARACTER));
};
