import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
import { post } from "../data";

export default class ArticleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      author: {},
    };
  }

  componentDidMount() {
    this.getDetail();
  }

  getDetail() {
    console.log(this.props.match.params.postId);
    post.map((item) => {
      if (item.id == this.props.match.params.postId) {
        console.log(item.id);

        this.setState({
          article: item,
        });
      }
    });
  }

  render() {
    const { article } = this.state;
    if (!article) {
      return <></>;
    }
    return (
      <article>
        <Jumbotron>
          <h4>{article.title}</h4>
          <div dangerouslySetInnerHTML={{__html: article.body}} />
        </Jumbotron>
      </article>
    );
  }
}
