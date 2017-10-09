import React, {Component} from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Welcome from './Welcome';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pendingDesc: '',
      pendingPriority: '',
      pendingDueDate: '',

      todoItems: [],
    }
    this.toggleCompletion = this.toggleCompletion.bind(this);
    this.toggleTodoItemProperty = this.toggleTodoItemProperty.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.setDesc = this.setDesc.bind(this);
    this.setPriority = this.setPriority.bind(this);
    this.setDueDate = this.setDueDate.bind(this);
    this.createDescText = this.createDescText.bind(this);
    this.createPriority = this.createPriority.bind(this);
    this.createDueDate = this.createDueDate.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

  }

  toggleTodoItemProperty(property, id) {
    this.setState({
      todoItems: this.state.todoItems.map((todoItem) => {
        if (id === todoItem.id) {
          return {
            ...todoItem,
            [property]: !todoItem[property]
          };
        }
        return todoItem;
      })
    });
  }

  toggleCompletion(id) {
    this.toggleTodoItemProperty('isComplete', id);
  }

  removeTodo(id) {
    this.setState({
      todoItems: this.state.todoItems.filter(todoItem => id !== todoItem.id)
    });
  }

  toggleEditing(id) {
    this.toggleTodoItemProperty('editEnabled', id);
  }

  setDesc(desc, id) {
    this.setState({
      todoItems: this.state.todoItems.map(todoItem => {
        if (id === todoItem.id) {
          return {
            ...todoItem,
            desc
          };
        }
        return todoItem;
      })
    });
  }


  setDueDate(dueDate, id) {
    this.setState({
      todoItems: this.state.todoItems.map(todoItem => {
        if (id === todoItem.id) {
          return {
            ...todoItem,
            dueDate
          };
        }
        return todoItem;
      })
    });
  }

  setPriority(priority, id) {
    this.setState({
      todoItems: this.state.todoItems.map(todoItem => {
        if (id === todoItem.id) {
          return {
            ...todoItem,
            priority
          };
        }
        return todoItem;
      })
    });
  }

  createDescText(e) {
    this.setState({pendingDesc: e.target.value})
  }

  createPriority(e) {
    this.setState({pendingPriority: e.target.value})
  }

  createDueDate(e) {
    this.setState({pendingDueDate: e.target.value})
  }

  createNewTodo(e) {
    e.preventDefault();
    this.setState({
      todoItems: [
        {
          desc: this.state.pendingDesc,
          priority: this.state.pendingPriority,
          dueDate: this.state.pendingDueDate,
          isComplete: false,
          editEnabled: false,
          id: Date.now(),
        },
        ...this.state.todoItems
      ],
      pendingDesc: '',
      pendingPriority: '',
      pendingDueDate: '',
    });
  }



  render() {

    if (this.state.todoItems.length == 0) {
      var todoView = <Welcome />
    } else {
      var todoView = <TodoList  todoItems={this.state.todoItems}
                                toggleCompletion={this.toggleCompletion} 
                                toggleEditing={this.toggleEditing}
                                setDesc={this.setDesc}
                                setDueDate={this.setDueDate}
                                setPriority={this.setPriority}
                                removeTodo={this.removeTodo} />
    }


    return (
      <div className='container'>
        <h1 style={{color: 'white'}}>Very Simple Todo App</h1>
        <h2><small style={{color: 'white'}}>Track all of the things</small></h2>
        <hr />
        <div className='row'>

          <div className='col-md-4'>
              <div className='panel panel-default'>
                <div className='panel-heading'>
                    <h3 className='panel-title'>Add New Todo</h3>
                </div>
                <AddTodo 
                    createNewTodo={this.createNewTodo}
                    createDescText={this.createDescText}
                    createDueDate={this.createDueDate}
                    createPriority={this.createPriority}
                    pendingDesc={this.state.pendingDesc}
                    pendingDueDate={this.state.pendingDueDate}
                    pendingPriority={this.state.pendingPriority}  />
              </div>
          </div>

          <div className='col-md-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>
                  View Todos
                </h3>
              </div>
              <form>
                {todoView}
              </form>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
