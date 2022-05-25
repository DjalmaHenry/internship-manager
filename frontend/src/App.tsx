import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Edit } from "./pages";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Edit />} path="/edit-intern/:id" />
      </Routes>
    </Router>
  );
}

export default App;
