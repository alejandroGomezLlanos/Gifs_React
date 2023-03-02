import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const images = await getGif(category);
    setImages(images);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isloading: false
  };
};
