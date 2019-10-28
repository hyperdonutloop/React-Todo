import React from 'react';

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
      todos: data
    };
  }

  addItem = task => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newItem] //spreading in todos - adding new item to list//
    })
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.done
          };
        } else {
          return item;
        }
      })
    });

  };

  render() {
    return (
      <div>
        <h2>Get Shit Done!</h2>
      </div>
    );
  }
}

export default App;
