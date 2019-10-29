import React from "react";
import Item from "../TodoComponents/Todo";

const TodoList = props => {

    return (
      <div className="todo-list">
        {props.tasks.map(item => (
          <Item 
            key={item.id}
            item={item}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear Completed Tasks
        </button>
      </div>
    );

};

export default TodoList;
