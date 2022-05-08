import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
