import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Collections from "./pages/Collections";
import Journal from "./pages/Journal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/journal" element={<Journal />} />
    </Routes>
  );
}

export default App;
