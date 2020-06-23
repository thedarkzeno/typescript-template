import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Container from "@material-ui/core/Container";

export default function Routes() {
  return (
    <div>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </div>
  );
}
