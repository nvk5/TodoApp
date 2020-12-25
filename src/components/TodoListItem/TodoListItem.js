import React from 'react';
import { connect } from 'react-redux';
import TodoActionButtons from '../TodoActionButtons';
import TodoListField from '../TodoListField';
import { markAsCompleted, markAsEditable, onDelete, onToggleFavourites } from '../../redux/actions';

const TodoListItem = ({ todo, markAsCompleted, onDelete, onToggleFavourites, markAsEditable }) => {
    const { id } = todo;

    return (
        <div className="todo-list__item d-flex mb-3">
            <TodoActionButtons color="outline-success" icon="check" title="complete" handler={() => markAsCompleted(id)} />
            <TodoListField todo={todo} />
            <div className="btn-group align-self-center" role="group">
                <TodoActionButtons color="danger" icon="trash" title="delete" handler={() => onDelete(id)} />
                <TodoActionButtons color="warning" icon="star" title="favourites" handler={() => onToggleFavourites(id)} />
                <TodoActionButtons color="primary" icon="edit" title="edit" handler={() => markAsEditable(id)} />
            </div>
        </div>
    )
}

const mapDispatchToProps = { markAsCompleted, markAsEditable, onDelete, onToggleFavourites }

export default connect(null, mapDispatchToProps)(TodoListItem);