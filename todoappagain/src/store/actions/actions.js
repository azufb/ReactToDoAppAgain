import * as actionTypes from './actionTypes';

export const addTodo = () => {
    return {
        type: actionTypes.ADD_TODO,
    }
}

export const deleteTodo = (todo) => {
    return {
        type: actionTypes.DELETE_TODO,
        todo: todo
    }
}

export const editTodo = (todo) => {
    return {
        type: actionTypes.EDIT_TODO,
        todo: todo
    }
}

export const setTitle = (title) => {
    return {
        type: actionTypes.SET_TITLE,
        title: title
    }
}

export const setError = (error) => {
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