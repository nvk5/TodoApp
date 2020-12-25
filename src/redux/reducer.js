import uuid from 'react-uuid';

const initialTodos = ['Learn React', 'Create apps', 'Drink coffee'];

const createInitialTodos = (todos) => {
    return todos.map(todo => {
        return {
            value: todo,
            all: true,
            active: true,
            completed: false,
            editable: false,
            favourite: false,
            archieve: false,
            id: uuid()
        }
    })
}

const initialState = {
    todoText: '',
    isValid: true,
    todo: [...createInitialTodos(initialTodos)],
    filter: 'all',
    archieve: [],
    colorTheme: 'light'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TODO':
            const todoText = action.todoText;
            return { ...state, todoText, isValid: true }

        case 'ADD_TODO':
            const newTodo = createInitialTodos([action.todoText]);

            if (!action.todoText) {
                return { ...state, isValid: false }
            }

            return { ...state, isValid: true, todoText: '', todo: [...state.todo, ...newTodo], filter: 'all' }

        case 'MARK_AS_COMPLETED':
            const completedTodoIndex = state.todo.findIndex(item => item.id === action.completedId);
            const completedTodoElem = state.todo[completedTodoIndex];
            const completedTodo = {
                ...completedTodoElem,
                active: !completedTodoElem.active,
                editable: false,
                completed: !completedTodoElem.completed
            };

            return {
                ...state,
                todo: [...state.todo.slice(0, completedTodoIndex), completedTodo, ...state.todo.slice(completedTodoIndex + 1)]
            }

        case 'MARK_AS_EDITABLE':
            const editableTodoIndex = state.todo.findIndex(item => item.id === action.editableId);
            const editableTodoElem = state.todo[editableTodoIndex];
            const newEditableTodo = {...editableTodoElem, editable: !editableTodoElem.editable};

            return {
                ...state,
                todo: [...state.todo.slice(0, editableTodoIndex), newEditableTodo, ...state.todo.slice(editableTodoIndex + 1)]
            }

        case 'EDIT_TODO':
            const editedTodoIndex = state.todo.findIndex(item => item.id === action.editedId);
            const editedTodoElem = state.todo[editedTodoIndex];
            const editedTodo = {...editedTodoElem, value: action.editedValue};

            return {
                ...state,
                todo: [...state.todo.slice(0, editedTodoIndex), editedTodo, ...state.todo.slice(editedTodoIndex + 1)]
            }

        case 'EDIT_DONE':
            const editDoneIndex = state.todo.findIndex(item => item.id === action.editDoneId);
            const editDoneElem = state.todo[editDoneIndex];
            const editDoneTodo = {...editDoneElem, editable: false};

            return {
                ...state,
                todo: [...state.todo.slice(0, editDoneIndex), editDoneTodo, ...state.todo.slice(editDoneIndex + 1)]
            }

        case 'FAVOURITE_TODO':
            const favouriteTodoIndex = state.todo.findIndex(item => item.id === action.favouriteId);
            const favouriteTodoElem = state.todo[favouriteTodoIndex];
            const favouriteTodo = {...favouriteTodoElem, favourite: !favouriteTodoElem.favourite};

            return {
                ...state,
                todo: [...state.todo.slice(0, favouriteTodoIndex), favouriteTodo, ...state.todo.slice(favouriteTodoIndex + 1)]
            }

        case 'DELETE_TODO':
            const deletedIndex = state.todo.findIndex(item => item.id === action.deletedId);
            const deletedElem = state.todo[deletedIndex];
            const newDeletedElem = {...deletedElem, active: false, archieve: true};

            return {
                ...state,
                archieve: [...state.archieve, newDeletedElem],
                todo: [
                    ...state.todo.slice(0, deletedIndex),
                    ...state.todo.slice(deletedIndex + 1)
                ]
            }

        case 'FILTER_TODOS':
            const filter = action.filter;

            return { ...state, filter }

        case 'CLEAN_ARCHIEVE':
            return { ...state, archieve: [] }

        case 'RESTORE_ARCHIEVE':
            const archieve = action.archieve;
            const restoreConfig = archieve.map(item => ({ ...item, active: true, archieve: false }));

            return { ...state, todo: [...state.todo, ...restoreConfig], filter: 'all', archieve: [] }

        case 'COLOR_THEME':
            const isChecked = action.isChecked;

            if (isChecked) {
                return {
                    ...state,
                    colorTheme: 'dark'
                }
            }

            return {
                ...state,
                colorTheme: 'light'
            }
        default:
            return state
    }
}

export default reducer;