import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

export const Header = ({history, handleSubmit}) => {
  return (
    <div>
      <h1>Search Images W28</h1>
      <Form history={history} handleSubmit={handleSubmit}/>
      <Navigation/>
    </div>
  )
}
