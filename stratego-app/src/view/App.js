import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./home/Home";
import { Lobby } from "./lobby/Lobby";
import { Prepare } from "./prepare/Prepare";
import { Game } from "./game/Game";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lobby">
            <Lobby />
          </Route>
          <Route path="/prepare">
            <Prepare />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          {/* <Route>
          {() => {
            return "Page not found";
          }}
        </Route> */}
          <Redirect to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
