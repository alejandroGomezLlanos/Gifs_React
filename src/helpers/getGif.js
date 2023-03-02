export const getGif = async (category) => {
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
