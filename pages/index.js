import React from "react";
import Head from "next/Head";
import Header from "./components/Header";

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
    <div className="ui container">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <Header />
      <h2>I'm feeling Supersonic. Give me gin and tonic!</h2>
      <input onChange={filterItems} />
      <ul>
        {filteredItems.map((item) => (
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
