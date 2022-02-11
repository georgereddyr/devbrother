import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

export default function List(props) {
  const {todos, removeTask, markTodoDone} = props;

  const list = todos.map((todo, index) => {
    return (
      <ListItem
        key={index}
        data={todo}
        removeTask={removeTask}
        markTodoDone={markTodoDone}
      />);
    })

  return list
}
