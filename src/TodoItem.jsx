import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoEdit from './TodoEdit';


const TodoItem = props => {
    var todoItemClass;
    var priority = '';

    if(props.priority === '1') {
        todoItemClass = 'form-group panel-body bg-success',
        priority = 'Low'
    } else if (props.priority === '2') {
        todoItemClass = 'form-group panel-body bg-warning',
        priority = 'Medium'
    } else if (props.priority === '3') {
        todoItemClass = 'form-group panel-body bg-danger',
        priority = 'High'
    } else {
        todoItemClass = 'form-group panel-body bg-default'
    }

    return (
        <div>
            <TodoEdit 
                closeEdit={props.handleToggleEditing}
                editEnabled={props.editEnabled}
                handleDescEdit={e => props.setDesc(e.target.value)}
                handleDueDateEdit={e => props.setDueDate(e.target.value)}
                handlePriorityEdit={e => props.setPriority(e.target.value)}
                desc={props.desc}
                priority={props.priority}
                dueDate={props.dueDate}
                 />
            <li style={{marginBottom: '0'}} className={todoItemClass} >
                <label>
                    <input 
                        type='checkbox' 
                        checked={props.isComplete} 
                        onChange={props.handleCompletion} />{' ' + props.desc}
                </label>
                <div className="pull-right form-group" style={{display: 'inline'}}>
                    <text style={{fontStyle: 'italic'}}>Due: {props.dueDate}</text>
                    <a style={{marginRight: '7px'}} id='edit-link' href='#' onClick={props.handleToggleEditing} className='edit-todo'><i className='glyphicon glyphicon-edit'></i></a>
                    <a id='delete-link' href='#' onClick={props.handleRemove} className='delete-todo' ><i className='glyphicon glyphicon-trash'></i></a>
                    
                </div>
            </li>
        </div>
    )
}


TodoItem.propTypes = {
    desc: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    editEnabled: PropTypes.bool.isRequired,
    handleCompletion: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    setDesc: PropTypes.func.isRequired,
    setDueDate: PropTypes.func.isRequired,
    setPriority: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired
};

export default TodoItem;