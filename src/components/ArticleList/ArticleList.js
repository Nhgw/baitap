import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { post } from "../data";

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: post,
    };
  }

  render() {
    const { articles } = this.state;
    return (
      <ListGroup>
        {articles.map((article) => (
          <ListGroup.Item>
            <Link to={"/posts/" + article.id}>{article.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
