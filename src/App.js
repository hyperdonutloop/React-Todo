import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";

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
      tasks: this.state.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });

  };


  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Get Shit Done!</h2>

        <TodoForm />
      
        </div>
      </div>
    );
  }
}

export default App;
