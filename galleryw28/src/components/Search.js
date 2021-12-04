import React from "react";
import Container from "./Container";

export const Search = ({searchTerm}) => {
  return (
    <div>
      <h2>
        {searchTerm} Images
        <Container searchTerm={searchTerm}/>
      </h2>
    </div>
  )
}