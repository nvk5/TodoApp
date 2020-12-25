import React from 'react';
import { connect } from 'react-redux';
import './TodoActionButtons.scss';

const TodoActionButtons = ({ filter, color, icon, title, handler }) => (
    <button
        disabled={filter === 'archieve'}
        onClick={handler}
        type="button"
        className={`btn btn-${color} todo-action-button align-self-center`}
        title={title}>
        <span className={`fas fa-${icon}`}></span>
    </button>
)

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps)(TodoActionButtons);