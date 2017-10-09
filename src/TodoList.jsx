import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';


const TodoList = props => 
    <ul style={{listStyleType: 'none', listStylePosition: 'inside', margin: '0', padding: '0'}}>

        {props.todoItems.map((todoItem, id) =>
            <TodoItem 
                key={id} 
                desc={todoItem.desc}
                priority={todoItem.priority}
                dueDate={todoItem.dueDate} 
                isComplete={todoItem.isComplete}
                editEnabled={todoItem.editEnabled}
                handleCompletion={() => props.toggleCompletion(todoItem.id)} 
                handleToggleEditing={() => props.toggleEditing(todoItem.id)}
                setDesc={text => props.setDesc(text, todoItem.id)}
                setDueDate={value => props.setDueDate(value, todoItem.id)}
                setPriority={text => props.setPriority(text, todoItem.id)}
                handleRemove={() => props.removeTodo(todoItem.id)} />
        )}

    </ul>;

TodoList.propTypes = {
    todoItems: PropTypes.array.isRequired,
    toggleCompletion: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setDesc: PropTypes.func.isRequired,
    setDueDate: PropTypes.func.isRequired,
    setPriority: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
};

export default TodoList;