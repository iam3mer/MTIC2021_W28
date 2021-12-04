// import React from "react";
import React, {Component} from "react";
import { PhotoContextProvider } from "./context/PhotoContext";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

// export class App extends React.Component {
export class App extends Component {

  handleSubmit = (evt, history, searchInput) => {
    evt.preventDefault();
    evt.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route render={props => (
              <Header handleSubmit={this.handleSubmit} history={props.history}/>
            )}/>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/beach"/>}/>
              <Route path="/beach" render={() => <Item searchTerm="beach"/>}/>
              <Route path="/bird" render={() => <Item searchTerm="bird"/>}/>
              <Route path="/mountain" render={() => <Item searchTerm="mountain"/>}/>
              <Route path="/search/:searchInput" render={props => (
                <Search searchTerm={props.match.params.searchInput}/>
              )}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    )
  }
}

// export default App;