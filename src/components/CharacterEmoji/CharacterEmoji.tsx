import { CHARACTER_ROLES } from "../../constants/characterRoles";

interface CharacterEmojiProps {
  role: CHARACTER_ROLES;
}

const emojiByRole = {
  [CHARACTER_ROLES.ADVISOR]: "🕊️",
  [CHARACTER_ROLES.FIGHTER]: "⚔️",
  [CHARACTER_ROLES.KING]: "👑",
  [CHARACTER_ROLES.SQUIRE]: "🛡️",
};

export function CharacterEmoji({ role }: CharacterEmojiProps) {
  return <i className="emoji">{emojiByRole[role]}</i>;
}
