import React, { Component } from "react";
import { Link } from "react-router-dom";
import { postsData } from "./../../Mock/postsData";
import "./style.css";
class PostsPage extends Component {
  render() {
    return (
      <>
        <ul className="PostsPageWrapper">
          {postsData.map((item) => (
            <li key={item.id}>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default PostsPage;
