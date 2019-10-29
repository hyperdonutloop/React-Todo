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
        <div className="button">
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear Completed Tasks &nbsp; <span role="img" aria-label="celebration">🎉</span>
        </button>
        </div>
      </div>
    );

};

export default TodoList;
