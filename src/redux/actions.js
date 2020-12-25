const createTodo = todoText => ({ type: 'CREATE_TODO', todoText });

const addTodo = todoText => ({ type: 'ADD_TODO', todoText });

const markAsCompleted = completedId => ({ type: 'MARK_AS_COMPLETED', completedId });

const markAsEditable = editableId => ({ type: 'MARK_AS_EDITABLE', editableId });

const onEdit = (editedValue, editedId) => ({ type: 'EDIT_TODO', editedValue, editedId });

const onEditDone = editDoneId => ({ type: 'EDIT_DONE', editDoneId });

const onDelete = deletedId => ({ type: 'DELETE_TODO', deletedId });

const onToggleFavourites = favouriteId => ({ type: 'FAVOURITE_TODO', favouriteId });

const onFilterTodos = filter => ({ type: 'FILTER_TODOS', filter });

const onCleanArchieve = archieve => ({ type: 'CLEAN_ARCHIEVE', archieve });

const onRestoreArchieve = archieve => ({ type: 'RESTORE_ARCHIEVE', archieve });

const toggleColorScheme = isChecked => ({ type: 'COLOR_THEME', isChecked });

export {
    createTodo,
    addTodo,
    markAsCompleted,
    markAsEditable,
    onEdit,
    onEditDone,
    onDelete,
    onToggleFavourites,
    onFilterTodos,
    onCleanArchieve,
    onRestoreArchieve,
    toggleColorScheme
};