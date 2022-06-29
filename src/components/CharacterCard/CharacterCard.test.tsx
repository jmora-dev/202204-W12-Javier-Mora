import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CHARACTER_ROLES } from "../../constants/characterRoles";
import { iCharacter } from "../../interfaces/iCharacter";
import { CharacterCard } from "./CharacterCard";

describe("Given CharacterCard", () => {
  let character: iCharacter;
  beforeEach(() => {
    character = {
      id: 1,
      name: "Dominic",
      age: 54,
      family: "Toretto",
      img: "img/torettoImg.png",
      isAlive: true,
      role: CHARACTER_ROLES.FIGHTER,
      dexterity: 7,
      reignYears: 10,
      fawnerLevel: 1,
      weapon: "The family",
      assignTo: "Someone",
    };
  });

  describe("When pass character by props", () => {
    test("Then should be have character data", () => {
      render(
        <CharacterCard
          character={character}
          killCharacter={() => {}}
          speakCharacter={() => {}}
        />
      );

      screen.getByText(`Edad: ${character.age} años`);
      screen.getByText(character.name);
      const imageElement = screen.getByAltText(
        character.name + " - " + character.family
      );
      expect(imageElement).toHaveAttribute("src", character.img);
    });
  });

  describe("When pass function by props", () => {
    test("Then should be called", () => {
      const killFn = jest.fn();
      const speakFn = jest.fn();
      render(
        <CharacterCard
          character={character}
          killCharacter={killFn}
          speakCharacter={speakFn}
        />
      );

      const killButton = screen.getByText(/muere/i);
      userEvent.click(killButton);
      expect(killFn).toBeCalledTimes(1);

      const speakButton = screen.getByText(/habla/i);
      userEvent.click(speakButton);
      expect(speakFn).toBeCalledTimes(1);
    });
  });
});
