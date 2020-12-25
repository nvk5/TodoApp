import React from 'react';
import {connect} from 'react-redux';
import {toggleColorScheme} from '../../redux/actions';
import './TodoColorTheme.scss'

const TodoColorTheme = ({toggleColorScheme}) => (
    <div className="form-check form-switch todo-color-theme">
        <input onChange={(event) => toggleColorScheme(event.target.checked)} className="form-check-input todo-color-theme__check" type="checkbox" id="flexSwitchCheckDefault"/>
    </div>
)

const mapDispatchToProps = {
    toggleColorScheme
}

export default connect(null, mapDispatchToProps)(TodoColorTheme);