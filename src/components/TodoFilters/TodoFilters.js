import React from 'react';
import { connect } from 'react-redux';
import { onFilterTodos } from '../../redux/actions';
import TodoColorTheme from '../TodoColorTheme';

const TodoFilters = ({ onFilterTodos, todo, filter, archieve }) => {
    const todoFilters = ['all', 'active', 'completed', 'favourite', 'archieve'];

    return (
        <>
            <h2 className="todo-filters__headline text-center">Filters</h2>
            <div className="list-group mb-3">
                {todoFilters.map((todoFilter, index) => {
                    const mainFilter = todo.filter(item => item[todoFilter]);
                    const isActive = todoFilter === filter ? 'active' : '';
                    const counter = todoFilter === 'archieve' ? archieve.length : mainFilter.length;
                    
                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => onFilterTodos(todoFilter)}
                            className={`list-group-item list-group-item-action d-flex justify-content-between text-capitalize ${isActive}`}>
                            {todoFilter}
                            <span className="badge bg-dark rounded-pill">{counter}</span>
                        </button>
                    )
                })}
            </div>
            <TodoColorTheme/>
        </>
    )
}

const mapStateToProps = ({ todo, filter, archieve }) => ({ todo, filter, archieve });

const mapDispatchToProps = { onFilterTodos }

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters);