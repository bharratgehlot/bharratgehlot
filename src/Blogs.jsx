import { Link } from 'react-router-dom'

function Blogs(){
  return (
    <div>
      <h1>Blogs </h1>
      <h2>Blog 1: Why eating 500g bananas is a good idea</h2>
      <Link to="/blog-page_1">Read here</Link>
      <h2>Blog 2: Why eating Samosa is a Bad for health</h2>
      <Link to="/blog-page_2">Read here</Link>
      <h2>Blog 3: Today I Dedustified my PC </h2>
      <Link to="/blog-page_3">Read here</Link>
      <h2>Blog 4: Mandsaur University - Brutally Honest Review </h2>
      <Link to="/blog-page_4">Read here</Link>
    </div>
  );
}

export default Blogs;