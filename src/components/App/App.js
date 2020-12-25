import React, { useEffect } from 'react';
import TodoFilters from '../TodoFilters';
import NewTodo from '../NewTodo';
import TodoList from '../TodoList';
import { connect } from 'react-redux';

const App = ({ colorTheme }) => {

    useEffect(() => {
        if (colorTheme === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light')
        }
    }, [colorTheme])

    return (
        <div className="todo">
            <header className="todo__header text-center py-3 mb-5">
                <h1>Todo App</h1>
            </header>
            <main className="todo__main container">
                <div className="row">
                    <div className="col-lg-3 todo__filters">
                        <TodoFilters />
                    </div>
                    <div className="col-lg-9 todo__content">
                        <NewTodo />
                        <TodoList />
                    </div>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = ({ colorTheme }) => ({ colorTheme });

export default connect(mapStateToProps)(App);