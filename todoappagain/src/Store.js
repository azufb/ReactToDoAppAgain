import { createStore } from 'redux';

// stateの初期値を設定する
const init = {
    todos: [{
        title: 'パンを買う。'
    }],
    mode: 'default'
}

// レデューサーを作成
export function todoReducer(state = init, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return addReduce(state, action);
        case 'DELETE_TODO':
            return deleteReduce(state, action);
        default:
            return state;
    }
}

// レデュースアクション
// 追加
function addReduce(state, action) {
    let todos = {
        title: action.title
    }
    let taskList = state.todos.slice(); // 一度、配列をコピーしてから他の処理する。
    taskList.push(todos); // 末尾に追加。
    return {
        todos: taskList,
        mode: 'default'
    };
}

// 削除
function deleteReduce(state, action, title) {
    let taskList = state.todos.slice(); // 一度、配列をコピーしてから他の処理する。
    let index = taskList.findIndex(todo => todo.title === action.title);
    taskList.splice(index, 1);
    return {
        todos: taskList,
        mode: 'delete'
    }
}

// アクションクリエーター
// 追加
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        title: text
    }
}

// 削除
export function deleteTodo(text) {
    return {
        type: 'DELETE_TODO',
        title: text
    }
}

// storeを作成
export default createStore(todoReducer);