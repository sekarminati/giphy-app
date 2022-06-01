import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Gallery from "./pages/gallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />}>
            <Route path=":query" element={<Gallery />} />
            <Route path="search" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
