import { Attributes } from "../../Attributes/Constants/Attributes";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";
import { ICharacter } from "../Interfaces/ICharacter";

let CHARACTER: ICharacter;
let WEAPON: IWeapon;

export const CalculateAttributesByWeapon = (
  character: ICharacter,
  weapon: IWeapon,
  addWeapon: boolean
): void => {
  CHARACTER = character;
  WEAPON = weapon;
  CalculateDamage(addWeapon);
  CalculateImplicits(addWeapon);
  CalculateExplicits(addWeapon);
};

const CalculateDamage = (addWeapon: boolean): void => {
  const weaponDamage = WEAPON.GetData().Damage;
  const characterDamage = CHARACTER.GetValueModifiedByAttribute(
    Attributes.DAMAGE
  );

  if (!addWeapon) {
    CHARACTER.SetValueModifiedInAttribute(
      CHARACTER.GetValueByAttribute(Attributes.DAMAGE),
      Attributes.DAMAGE
    );
  } else {
    CHARACTER.SetValueModifiedInAttribute(
      characterDamage + weaponDamage,
      Attributes.DAMAGE
    );
  }
};

const CalculateImplicits = (addWeapon: boolean): void => {
  if (WEAPON.HasImplicits())
    WEAPON.GetData().Implicits.forEach((i) => i.Apply(CHARACTER, addWeapon));
};

const CalculateExplicits = (addWeapon: boolean): void => {
  if (WEAPON.HasExplicits())
    WEAPON.GetData().Explicits.forEach((e) => e.Apply(CHARACTER, addWeapon));
};
