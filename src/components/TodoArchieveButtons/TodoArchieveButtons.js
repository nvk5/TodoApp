import React from 'react';
import { connect } from 'react-redux';
import { onCleanArchieve, onRestoreArchieve } from '../../redux/actions';
import './TodoArchieveButton.scss';

const TodoArchieveButtons = ({ archieve, onCleanArchieve, onRestoreArchieve }) => (
    <div className="btn-group align-self-end mt-5" role="group">
        <button
            onClick={() => onCleanArchieve(archieve)}
            type="button"
            className="btn btn-danger todo-list__btn todo-archieve-button">
            Clean All
        <span className="fas fa-thumbs-down"></span>
        </button>
        <button
            onClick={() => onRestoreArchieve(archieve)}
            type="button"
            className="btn btn-success todo-list__btn todo-archieve-button">
            Restore All
        <span className="fas fa-thumbs-up"></span>
        </button>
    </div>
)

const mapStateToProps = ({ archieve }) => ({ archieve });

const mapDispatchToProps = { onCleanArchieve, onRestoreArchieve }

export default connect(mapStateToProps, mapDispatchToProps)(TodoArchieveButtons);