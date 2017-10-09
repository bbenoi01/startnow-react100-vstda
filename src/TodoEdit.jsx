import React, { Component } from 'react';
import PropTypes from 'prop-types';


const TodoEdit = props => {

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

    if (props.editEnabled) {
        return (
            <li style={{marginBottom: '0'}} className={todoItemClass} >
                <label>Description</label>
                <textarea 
                    type='text' 
                    id='edit-description' 
                    defaultValue={props.desc} 
                    onChange={props.handleDescEdit} 
                    className='form-control update-todo-text' />
                <div className="row">
                    <div style={{marginTop: '10px'}} className="col-md-6">
                        <label>Due Date</label>
                        <input 
                            type='date' 
                            id='edit-date' 
                            defaultValue={props.dueDate} 
                            onChange={props.handleDueDateEdit} 
                            className='form-control' />
                    </div>
                    <div style={{marginTop: '10px'}} className="col-md-6">
                        <label>Priority</label>
                        <select defaultValue={props.priority} onChange={props.handlePriorityEdit} className="btn-block update-todo-priority">
                            <option value="3">High</option>
                            <option value='2'>Medium</option>
                            <option value='1'>Low</option>
                        </select>
                    </div>
                </div>
                <div className="text-right form-group">
                    <button style={{marginTop: '10px'}} type='submit' onClick={props.closeEdit} className="btn btn-warning update-todo">Save</button>
                </div>
            </li>
        );
    } 

    return null;
};

TodoEdit.propTypes = {
    desc: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    editEnabled: PropTypes.bool.isRequired,
    handleDescEdit: PropTypes.func.isRequired,
    handleDueDateEdit: PropTypes.func.isRequired,
    handlePriorityEdit: PropTypes.func.isRequired
};

export default TodoEdit;