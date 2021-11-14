import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './index.css';
import './App.css';

const image = React.createElement("img", 
  {
    src: logo,
    className: "icon-image",
  }
)

const container = React.createElement("div", 
  {
    className: "icon-container",
  },
  image
)

const icon = React.createElement("Icon",
  {
    className: "avatar"
  },
  container
)

const Icon = (
  <div className="icon-container">
    <img src={logo} className="icon-image" />
  </div>
);

ReactDOM.render(Icon, document.getElementById("root"));

/*
<icon class="avatar">
  <div class="icon-container">
    <img src="/static/media/logo.6ce24c58.svg" class="icon-image">
  </div>
</icon>
*/
