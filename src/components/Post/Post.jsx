import React from "react";
import { useParams } from "react-router-dom";
import { postsData } from "./../../Mock/postsData";
import "./style.css";
export default function Post() {
  const { id } = useParams();
  const myPost = postsData.find((item) => item.id === Number(id));
  return (
    <>
      <div className="postWrapper">
        <span className="postId">Id: {myPost.id}</span>
        <span className="postTitle">Title: {myPost.title}</span>
        <span className="postBody">Description: {myPost.body}</span>
      </div>
    </>
  );
}
