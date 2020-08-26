import * as actionTypes from './actionTypes';

export const addTodo = () => {
    return {
        type: actionTypes.ADD_TODO,
    }
}

export const deleteTodo = () => {
    return {
        type: actionTypes.DELETE_TODO,
        todo: todo
    }
}

export const editTodo = () => {
    return {
        type: actionTypes.EDIT_TODO,
        todo: todo
    }
}

export const setTitle = () => {
    return {
        type: actionTypes.SET_TITLE,
        title: title
    }
}

export const setError = () => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    }
}

export const setTodo = (todo) => {
    return {
        type: actionTypes.SET_TODO,
        todo: todo
    }
}

export const setEdit = () => {
    return {
        type: actionTypes.SET_EDIT,
    }
}