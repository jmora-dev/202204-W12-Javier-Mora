import { render, screen } from "@testing-library/react";
import { CHARACTER_ROLES } from "../../constants/characterRoles";
import { CharacterEmoji } from "./CharacterEmoji";

describe("Given CharacterEmoji component", () => {
  describe("When role is advisor", () => {
    test("Then should be 🕊️", () => {
      render(<CharacterEmoji role={CHARACTER_ROLES.ADVISOR} />);
      screen.getByText("🕊️");
    });
  });

  describe("When role is fighter", () => {
    test("Then should be ⚔️", () => {
      render(<CharacterEmoji role={CHARACTER_ROLES.FIGHTER} />);
      screen.getByText("⚔️");
    });
  });

  describe("When role is king", () => {
    test("Then should be 👑", () => {
      render(<CharacterEmoji role={CHARACTER_ROLES.KING} />);
      screen.getByText("👑");
    });
  });

  describe("When role is squire", () => {
    test("Then should be 🛡️", () => {
      render(<CharacterEmoji role={CHARACTER_ROLES.SQUIRE} />);
      screen.getByText("🛡️");
    });
  });
});
