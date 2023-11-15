// import Search from "./pages/auth/components/Search";
import "./App.css";
import Dashboard from "./Dashboard";
import Layout from "./Layout";
import Categories from "./pages/categories/Categories";
import Content from "./pages/content/Content";
import Creator from "./pages/creator/Creator";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="content" element={<Content />} />
          <Route path="creator" element={<Creator />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
