import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import Layout from "./Layout/layout";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:symbol" element={<DetailsPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
