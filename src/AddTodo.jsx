import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AddTodo = props =>

    <form onSubmit={props.createNewTodo} >
        <div className='panel-body form-group'>
            <strong>I want to...</strong>
            <textarea type='text' onChange={props.createDescText} value={props.pendingDesc} className='create-todo-text' name='inputText' />
            <br />
            <strong>Due Date</strong>
            <input type='date' onChange={props.createDueDate} value={props.pendingDueDate} className='form-control' />
            <br />
            <strong>How much of a priority is this?</strong>
            <select onChange={props.createPriority} value={props.pendingPriority} className='form-control create-todo-priority' name='priority' >
                <option defaultValue hidden>Select a Priority</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
            </select>
        </div>
        <div className='panel-footer'>
            <button type='submit' className='btn btn-warning btn-block create-todo' >Add</button>
        </div>
    </form>;

AddTodo.propTypes = {
    createNewTodo: PropTypes.func.isRequired,
    createDescText: PropTypes.func.isRequired,
    createDueDate: PropTypes.func.isRequired,
    createPriority: PropTypes.func.isRequired,
    pendingDesc: PropTypes.string,
    pendingDueDate: PropTypes.string,
    pendingPriority: PropTypes.string

}

export default AddTodo;