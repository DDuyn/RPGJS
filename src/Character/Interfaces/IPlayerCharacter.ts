import { LocationWeapon } from "../../Shared/Enums/LocationWeapon";
import { ISkill } from "../../Skills/Interfaces/ISkill";
import { IWeapon } from "../../Weapons/Interfaces/IWeapon";

export interface IPlayerCharacter {
  GainExperience(experience: number): void;
  RecoverCurrentHealth(): void;
  PurchaseSkill(skill: ISkill): boolean;
  EquipWeapon(weapon: IWeapon, location: LocationWeapon): void;
  UnequipWeapon(location: LocationWeapon): void;
}
