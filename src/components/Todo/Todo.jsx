import React from "react";
import { useParams } from "react-router-dom";
import { todosData } from "./../../Mock/todosData";
import "./style.css";
export default function Todo() {
  const { id } = useParams();
  const myTodo = todosData.find((item) => item.id === Number(id));
  return (
    <>
      <div className="todoWrapper">
        <span className="todoId">Id: {myTodo.id}</span>
        <span className="todoTitle">Title: {myTodo.title}</span>
        <span className="todoBody">Description: {myTodo.body}</span>
      </div>
    </>
  );
}
