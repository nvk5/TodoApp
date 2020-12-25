import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from '../TodoListItem';
import TodoArchieveButtons from '../TodoArchieveButtons';
import './TodoList.scss';

const TodoList = ({ todo, filter }) => {
    if (todo.length === 0) {
        return (
            <div className="list-group todo-list">
                <p className="todo-list__failed">You have no {filter === 'all' ? '' : filter} Todos yet</p>
            </div>
        )
    }

    return (
        <div className="list-group todo-list">
            {todo.map(item => <TodoListItem key={item.id} todo={item} />)}
            {filter === 'archieve' && <TodoArchieveButtons />}
        </div>
    )
}

const mapStateToProps = ({ todo, filter, archieve }) => {
    const todoList = filter === 'archieve' ? archieve : todo.filter(item => item[filter]);

    return { todo: todoList, filter }
}


export default connect(mapStateToProps)(TodoList);