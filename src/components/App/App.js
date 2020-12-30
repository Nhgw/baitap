import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import ArticleList from "../ArticleList/ArticleList";
import ArticleView from "../ArticleView/ArticleView";
import AuthorView from "../AuthorView/AuthorView";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Jumbotron className="text-center">
            <Link to="/">
              <h1>Study Case</h1>
            </Link>
          </Jumbotron>
          <Switch>
            <Route path="/posts/:postId" component={ArticleView} />
            <Route path="/" component={ArticleList} />
          </Switch>
        </Container>
      </Router>
    );
  }
}
