import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createTodo, addTodo } from '../../redux/actions';
import './NewTodo.scss';

const NewTodo = ({ todoText, createTodo, addTodo, isValid }) => {

    const todoInput = useRef(null);

    useEffect(() => todoInput.current.focus(), [todoText]);

    return (
        <div className="input-group mb-3">
            <input
                ref={todoInput}
                type="text"
                className="form-control"
                placeholder="What needs to be done?"
                value={todoText}
                onChange={(event) => createTodo(event.target.value)}
            />
            <button
                className="btn btn-info text-white"
                type="button"
                onClick={() => addTodo(todoText)}>
                Add task
            </button>
            <div className={isValid ? 'todo-validation' : 'todo-validation show'}>Input is empty!</div>
        </div>
    )
}

const mapStateToProps = ({ todoText, isValid }) => ({ todoText, isValid });

const mapDispatchToProps = { createTodo, addTodo }

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);