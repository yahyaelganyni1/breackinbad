import React from "react";
import Characters from "./features/characters/Characters";
import SingleCharacter from "./features/singleCharacter/SingleCharacter";
import {
  Routes,
  Route,

} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<SingleCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
