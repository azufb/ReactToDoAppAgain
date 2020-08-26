import * as actionTypes from '../actions/actionTypes';

// stateの初期値
const initialState = {
    todos: [], // リスト部分に表示する、todo一覧の配列
    title: '', // 入力フォームの部分
    todo: '', // クリックされた値が一旦格納される部分
    edit: false, // setEditで、true/falseの切替
    error: '' // 警告文
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
            var newList = [...state.todos];
            var index = newList.indexOf(state.todo);
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