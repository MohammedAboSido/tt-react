import React, { Component } from "react";
import { Link } from "react-router-dom";
import { todosData } from "./../../Mock/todosData";
import "./style.css";
class TodosPage extends Component {
  render() {
    return (
      <>
        <ul className="todosPageWrapper">
          {todosData.map((item) => (
            <li key={item.id}>
              <Link to={`/todos/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodosPage;
