import React from "react";

class TodoForm extends React.Component {

    constructor() {
      super();
      this.state = {
          newItem: ''
      };
    }

    handleChanges = e => {
      this.setState({
          newItem: e.target.value
      });
    };

    handleSubmit = e => {
      e.preventDefault();
      this.props.addItem(this.state.newItem);
      this.setState({ newItem: '' });
    }

    render() {

      return (
        <div className="tasks">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="item">New Task</label>
            <input
                type="text"
                name="item"
                id="item"
                value={this.state.newItem}
                onChange={this.handleChanges}
                className="input-box"
                placeholder="..."
            />
          <button className="add-button">Add Task!</button>
        </form>
        </div>
        )



    }

}

export default TodoForm;