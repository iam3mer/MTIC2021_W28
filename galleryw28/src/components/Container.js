import React, {useContext, useEffect} from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader"

export const Container = ({searchTerm}) => {
  const {images, loading, runSearch} = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [runSearch, searchTerm])

  return (
    <div className="photo-container">
      {loading ? <Loader/> : <Gallery data={images}/>}
    </div>
  )
}