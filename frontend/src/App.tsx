import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Detail, Edit, Error, Login, Settings } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<Edit />} path="/edit-intern/:ra" />
        <Route element={<Detail />} path="/detail-intern/:ra" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<Error />} path="/*" />
      </Routes>
    </Router>
  );
};

export default App;
