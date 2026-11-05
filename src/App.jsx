import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Hero/Home";
import { Level } from "./pages/Level/Level";


function App () {

    return (
        <> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/level" element={<Level />} />
                {/* <Route path="/game{id}" element={<Game />} /> */}
            </Routes>
        </>
    );
}

export default App;