import { render, screen } from "@testing-library/react";
import { CHARACTER_ROLES } from "../../constants/characterRoles";
import { iCharacter } from "../../interfaces/iCharacter";
import { CharacterRoleInfo } from "./CharacterRoleInfo";

describe("Given CharacterEmoji component", () => {
  let character: iCharacter;
  beforeEach(() => {
    character = {
      id: 1,
      name: "Dominic",
      age: 54,
      family: "Toretto",
      img: "img/torettoImg.png",
      isAlive: true,
      role: CHARACTER_ROLES.ADVISOR,
      dexterity: 7,
      reignYears: 10,
      fawnerLevel: 1,
      weapon: "The family",
      assignTo: "Someone",
    };
  });

  describe("When role is advisor", () => {
    test("Then should have 'Asesora a' information", () => {
      render(<CharacterRoleInfo character={character} />);
      screen.getByText(/Asesora a: Someone/i);
    });
  });

  describe("When role is figther", () => {
    test("Then should have 'Arma' and 'Destreza' information", () => {
      character.role = CHARACTER_ROLES.FIGHTER;
      render(<CharacterRoleInfo character={character} />);
      screen.getByText(/Arma: The family/i);
      screen.getByText(/Destreza: 7/i);
    });
  });

  describe("When role is king", () => {
    test("Then should have 'Años de reinado' information", () => {
      character.role = CHARACTER_ROLES.KING;
      render(<CharacterRoleInfo character={character} />);
      screen.getByText(/Años de reinado: 10/i);
    });
  });

  describe("When role is squire", () => {
    test("Then should have 'Peloteo' and 'Sirve a' information", () => {
      character.role = CHARACTER_ROLES.SQUIRE;
      render(<CharacterRoleInfo character={character} />);
      screen.getByText(/Peloteo: 1/i);
      screen.getByText(/Sirve a: Someone/i);
    });
  });
});
