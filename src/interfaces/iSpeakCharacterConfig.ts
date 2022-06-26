import { CHARACTER_ROLES } from "../constants/characterRoles";

export interface iSpeakCharacterConfig {
  visible: boolean;
  role?: CHARACTER_ROLES;
  imgSrc?: string;
  imgAltText?: string;
}
