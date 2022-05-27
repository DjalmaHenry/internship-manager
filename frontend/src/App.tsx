import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Detail, Edit, Settings } from "./pages";

import { Login } from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Edit />} path="/edit-intern/:ra" />
        <Route element={<Detail />} path="/detail-intern/:ra" />
        <Route element={<Settings />} path="/settings" />
      </Routes>
    </Router>
  );
};

export default App;
