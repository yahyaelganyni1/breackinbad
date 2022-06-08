import React from "react";
import Characters from "./features/characters/Characters";
import SingleCharacter from "./features/singleCharacter/SingleCharacter";
import Header from "./Header";
import {
  Routes,
  Route,

} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/:id" element={<SingleCharacter />} />
      </Routes>
    </div>
  );
}

export default App;
