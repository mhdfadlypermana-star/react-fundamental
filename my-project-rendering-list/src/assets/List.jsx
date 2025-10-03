function List({ category = "Category", items = [] }) {
  const listItem = items.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp;
      <i>
        <b>{item.calories}</b>
      </i>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItem}</ol>
    </>
  );
}

export default List;
