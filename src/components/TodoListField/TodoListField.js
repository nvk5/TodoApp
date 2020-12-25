import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { onEdit, onEditDone } from '../../redux/actions';
import './TodoListField.scss';

const TodoListField = ({ onEdit, onEditDone, todo, filter }) => {
    const { completed, editable, favourite, id, value } = todo;

    const newRef = useRef(null);
    useEffect(() => {
        if (editable) {
            newRef.current.focus()
        }
    }, [editable]);

    
    let completedTodoClass = 'form-control todo-list-field mx-2';

    if (completed) {
        completedTodoClass += ' completed'
    }

    if (favourite) {
        completedTodoClass += ' favourite'
    }

    if (filter === 'archieve') {
        completedTodoClass += ' archieved'
    }

    return (
        <input
            disabled={filter === 'archieve'}
            ref={newRef}
            onBlur={() => onEditDone(id)}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    onEditDone(id)
                }
            }}
            onChange={(event) => onEdit(event.target.value, id)}
            className={completedTodoClass}
            value={value}
            type="text"
            readOnly={!editable}
        />
    )
}

const mapStateToProps = ({ filter }) => ({ filter });

const mapDispatchToProps = { onEdit, onEditDone }

export default connect(mapStateToProps, mapDispatchToProps)(TodoListField)