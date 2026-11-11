import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Level } from "./pages/Level/Level";
import { PlayScreen } from "./pages/PlayScreen/PlayScreen";

const LEVELS = [
  { id: 1, difficulty: "Fácil", numberTables: 4 },
  { id: 2, difficulty: "Medio", numberTables: 5 },
  { id: 3, difficulty: "Difícil", numberTables: 6 },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level" element={<Level levels={LEVELS} />} />
        <Route path="/game/:levelId" element={<PlayScreen levels={LEVELS} />} />
      </Routes>
    </>
  );
}

export default App;
