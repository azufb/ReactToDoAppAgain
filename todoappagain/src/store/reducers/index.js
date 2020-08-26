import * as actionTypes from '../actions/actionTypes';

// stateの初期値
const initialState = {
    todos: [],
    title: '',
    todo: '',
    edit: false,
    error: ''
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO :
            const newTodo = {
                id: Date.now(),
                value: state.title,
            }
            return {
                ...state,
                todos: state.todos.concat(newTodo),
                title: '',
                error: ''
            }
        case actionTypes.DELETE_TODO :
            let newList = [...state.todos];
            let index = newList.indexOf(state.todo);
            if (index !== -1) {
                newList.splice(index, 1);
                return {
                    ...state,
                    todos: newList
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.EDIT_TODO :
            newList = [...state.todos];
            index = newList.indexOf(state.todo);
            if (index !== -1) {
                newList[index].value = state.title;
                return {
                    ...state,
                    title: '',
                    edit: false,
                    todos: newList,
                    error: ''
                }
            } else {
                return {
                    ...state
                }
            }
        case actionTypes.SET_TITLE : 
            return {
                ...state,
                title: action.title
            }
        case actionTypes.SET_TODO :
            return {
                ...state,
                todo: action.todo,
                error: ''
            }
        case actionTypes.SET_ERROR :
            return {
                ...state,
                error: action.error
            }
        case actionTypes.SET_EDIT :
            return {
                ...state,
                edit: true,
                error: ''
            }
        default :
            return state;
    }
}

export default todos;