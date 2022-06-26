import { CHARACTER_ROLES } from "../constants/characterRoles";

export interface iCharacter {
  id: number;
  role: CHARACTER_ROLES;
  img: string;
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  reignYears?: number;
  weapon?: string;
  dexterity?: number;
  assignTo?: string;
  fawnerLevel?: number;
}
