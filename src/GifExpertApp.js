import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./styles.css";

export const GifExpertApp = () => {
  const [categories, setCategorias] = useState(["Zodiac", "frog"]);

  const onAddCategory = (category) => {
    setCategorias((list) => [...list, category]);
  };

  return (
    <>
      <h1>GifExpert</h1>
      <h2>escribe y luego enter</h2>
      <AddCategory onAddCategory={onAddCategory} />
      <ol>
        {categories.map((category, key) => {
          return <GifGrid category={category} key={key} />;
        })}
      </ol>
    </>
  );
};
