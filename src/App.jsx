import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage_1 from "./BlogPage_1";
import BlogPage_2 from "./BlogPage_2";
import BlogPage_3 from "./BlogPage_3";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog-page_1" element={<BlogPage_1 />} />
        <Route path="/blog-page_2" element={<BlogPage_2 />} />
        <Route path="/blog-page_3" element={<BlogPage_3 />} />
      </Routes>
    </>
  );
}

export default App;
