import { CharactersContextProvider } from "../../context/charactersContext";
import { CharacterList } from "../CharacterList/CharacterList";

function App() {
  return (
    <CharactersContextProvider>
      <CharacterList />
    </CharactersContextProvider>
  );
}

export default App;
