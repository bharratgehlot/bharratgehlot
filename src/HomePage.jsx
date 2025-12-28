import { useState, useEffect } from "react";
import Blogs from "./Blogs";

function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h3>BHARRAT GEHLOT</h3>
        <h1>Monster Coder</h1>
      </div>

      <div className="currentTime">
        <h2>Added on 22-12-2025</h2>
        <p>Current Time: {currentTime.toLocaleString()}</p>
      </div>
      <p>27 / React Dev / Mindcoder</p>
      <p>This website uses react and only react. Thankyou</p>
      <div>
        <h1>My recent Blogs</h1>
        <Blogs />
      </div>
    </>
  );
}

export default HomePage;
