import React from "react";
import TodoForm from "./addTodoForm";
import { Todos } from "../components/ServerComponents";

const page = () => {
  return (
    <div className="container">
      <TodoForm />
      <section className="todosContainer">
        <Todos
          title={"Sample Task"}
          description={"Sample Description"}
          id={"sample id"}
          completed={true}
        />
      </section>
    </div>
  );
};

export default page;
