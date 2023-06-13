"use client";

import React from "react";

const TodoForm = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default TodoForm;
