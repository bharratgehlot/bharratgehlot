import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage_1 from "./BlogPage_1";
import BlogPage_2 from "./BlogPage_2";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-page_1" element={<BlogPage_1 />} />
        <Route path="/blog-page_2" element={<BlogPage_2 />} />
      </Routes>
    </>
  );
}

export default App;
