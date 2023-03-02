import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { useFetchGifs } from "./useFetchGifs";
import GifItem from "./GifItem";

/*
const getGif = async (category) => {
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=sosiD8NAxBIJLlbi8nvvdr3EKklSkyxZ&limit=20&offset=0&q=" +
    category;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    };
  });
  return gifs;
};

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const variablegifs = await getGif(category);
    setImages(variablegifs);
  };
  useEffect(() => {
    getImages();
  }, []);

  
*/

//todo lo de arriba fue movido a este custom hook
//el cual recibe la categoria y lo llvea a
//useFetchGifs y este llama a getGifs
export const GifGrid = ({ category }) => {
  const { images, isloading } = useFetchGifs(category);

  return (
    <>
      <h3> {category} </h3>
      <div className="card-grid">
        {images.map((image, key) => {
          return <GifItem key={key} {...image} />;
        })}
      </div>
    </>
  );
};
