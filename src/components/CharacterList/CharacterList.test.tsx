import { render, screen } from "@testing-library/react";
import { CHARACTER_ROLES } from "../../constants/characterRoles";
import { CharactersContext } from "../../context/charactersContext";
import { CharacterList } from "./CharacterList";

describe("Given CharacterList component", () => {
  describe("When character array have two elements", () => {
    test("Then should paint two characters", () => {
      const contextInitialState = {
        characters: [
          {
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
          },
          {
            id: 2,
            name: "Mia",
            age: 46,
            family: "Toretto",
            img: "img/miaImg.png",
            isAlive: true,
            role: CHARACTER_ROLES.ADVISOR,
            dexterity: 6,
            reignYears: 0,
            fawnerLevel: 2,
            weapon: "The family",
            assignTo: "Someone",
          },
        ],
        speakConfig: { visible: false },
        killCharacter: (id: number) => {},
        speakCharacter: (id: number) => {},
      };
      render(
        <CharactersContext.Provider value={contextInitialState}>
          <CharacterList />
        </CharactersContext.Provider>
      );

      screen.getByText(/Dominic/i);
      screen.getByText(/Mia/i);
    });
  });
});
