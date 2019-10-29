import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css";

const data = [

  {
    task: 'Buy some cookies',
    id: 1,
    completed: false
  },
  {
    task: 'Clean Kids Room',
    id: 2,
    completed: false
  },
  {
    task: "Eat the Cookies",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: data
    }
  }

  addItem = task => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleCompleted = id => {

    this.setState({
      tasks: this.state.tasks.map(item => {     //loop through tasks, look at each one, one at a time
        if (item.id === id) { //when we find item we clicked on -> build new object for that item
          return {
            ...item, //spread in properties from old items
            completed: !item.completed //update purchased property to the opposite of what it currently is
          };
        } else {
          return item; //if it is not the item we looked at/click on, return it untouched
        }
      })
    });

  };

  clearCompleted = () => {
    console.log("clear completed clicked");
    this.setState({
      tasks: this.state.tasks.filter(element => element.completed === false )
    })

  }


  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Get Shit Done!</h2>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList 
          toggleCompleted={this.toggleCompleted}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
