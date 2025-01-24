import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tugas6 from "./tugas6/Tugas6";
import Tugas7 from "./tugas7/Tugas7";
import Tugas8 from "./tugas8/Tugas8";
import Tugas9 from "./tugas9/Tugas9";
import Tugas10 from "./tugas10/Tugas10";
import Tugas11 from "./tugas11/tugas11";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Tugas6 />}></Route>
          <Route path="/tugas7" element={<Tugas7 name="Ahmad 'Afien Zidan" batch={63} email="afienzidan227@gmail.com" />}></Route>
          <Route path="/tugas8" element={<Tugas8 />}></Route>
          <Route path="/tugas9" element={<Tugas9 />}></Route>
          <Route path="/tugas10" element={<Tugas10 />}></Route>
          <Route path="/tugas11" element={<Tugas11 />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
