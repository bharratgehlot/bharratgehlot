// Rendering lists in JS

function List() {
  const fruits = ["apple", "orange", "banana", "pineple"];
  const listItems = fruits.map(fruit => <li>{fruit}</li>);


  return <ol>{listItems}</ol>;
}

export default List;
