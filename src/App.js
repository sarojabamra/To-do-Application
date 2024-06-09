import "./App.css";
import Instructions from "./components/instructions/Instructions";
import Todo from "./components/todo/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
