import imageSearch from "./components/api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);

  const handleSubmit = async (term) => {
    const images = await imageSearch(term);
    console.log(images);
    setImageList(images);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={imageList} />
    </div>
  );
}

export default App;
