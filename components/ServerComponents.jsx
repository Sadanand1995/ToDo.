import React from "react";
import { TodoHandlinghBtn } from "./Clients";

export const Todos = ({ title, description, id, completed }) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <TodoHandlinghBtn id={id} completed={completed} />
      </div>
    </div>
  );
};
