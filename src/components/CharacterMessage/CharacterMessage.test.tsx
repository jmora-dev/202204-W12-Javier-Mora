import { render, screen } from "@testing-library/react";
import { CHARACTER_ROLES } from "../../constants/characterRoles";
import { CharactersContext } from "../../context/charactersContext";
import { CharacterMessage } from "./CharacterMessage";

describe("Given CharacterContext", () => {
  describe("When visible is false", () => {
    test("Then should not have 'on' class", () => {
      const contextInitialState = {
        characters: [],
        speakConfig: { visible: false },
        killCharacter: (id: number) => {},
        speakCharacter: (id: number) => {},
      };
      render(
        <CharactersContext.Provider value={contextInitialState}>
          <CharacterMessage />
        </CharactersContext.Provider>
      );

      const messageContainer = screen.getByTestId("message-container");
      expect(messageContainer).not.toHaveClass("on");
    });
  });

  describe("When visible is true, role is king, image is image.png and altText is alternativeText", () => {
    test("Then should have 'on' class and speakConfig must be in the components", () => {
      const contextInitialState = {
        characters: [],
        speakConfig: {
          visible: true,
          role: CHARACTER_ROLES.KING,
          imgSrc: "image.png",
          imgAltText: "alternativeText",
        },
        killCharacter: (id: number) => {},
        speakCharacter: (id: number) => {},
      };

      render(
        <CharactersContext.Provider value={contextInitialState}>
          <CharacterMessage />
        </CharactersContext.Provider>
      );

      const messageContainer = screen.getByTestId("message-container");
      expect(messageContainer).toHaveClass("on");
      const imageElement = screen.getByAltText("alternativeText");
      expect(imageElement).toHaveAttribute("src", "image.png");
      screen.getByText("Vais a morir todos");
    });
  });
});
