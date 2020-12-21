import React from "react";

const List = ({ items }) => {
  const [filteredItems, setFilteredItems] = React.useState(items);

  const filterItems = (event) => {
    const searchValue = event.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter((item) =>
      item.startsWith(searchValue)
    );

    setFilteredItems(matchingItems);
  };

  return (
    <div>
      <input onChange={filterItems} />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ListContainer = () => (
  <List items={["React", "NextJS", "GraphQL", "SSR"]} />
);

export default ListContainer;
