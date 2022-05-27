import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Edit } from "./pages";
import { Detail } from "./pages/Detail/Detail";
import { Login } from "./pages/Login/Login";
import { Settings } from "./pages/Settings/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Edit />} path="/edit-intern/:id" />
        <Route element={<Detail />} path="/detail-intern/:id" />
        <Route element={<Settings />} path="/settings" />
      </Routes>
    </Router>
  );
}

export default App;
