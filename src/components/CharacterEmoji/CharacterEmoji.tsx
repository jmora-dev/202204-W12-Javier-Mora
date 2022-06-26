import { CHARACTER_ROLES } from "../../constants/characterRoles";

interface CharacterEmojiProps {
  role: CHARACTER_ROLES;
}

export function CharacterEmoji({ role }: CharacterEmojiProps) {
  const selectEmoji = (role: CHARACTER_ROLES): string => {
    switch (role) {
      case CHARACTER_ROLES.KING:
        return "👑";
      case CHARACTER_ROLES.SQUIRE:
        return "🛡️";
      case CHARACTER_ROLES.FIGHTER:
        return "⚔️";
      case CHARACTER_ROLES.ADVISOR:
        return "🕊️";
      default:
        return "";
    }
  };

  return <i className="emoji">{selectEmoji(role)}</i>;
}
