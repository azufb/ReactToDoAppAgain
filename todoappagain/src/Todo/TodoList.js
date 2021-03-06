import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actions';

const useStyles = makeStyles({
    container: {
        padding: 16
    }
});

function TodoList({ todos, setTitle, setTodo, setEdit, deleteTodo }) {
    const classes = useStyles();

    const handleEdit = (todo) => {
        setTitle(todo.value);
        setEdit();
        setTodo(todo);
    }

    const handleDelete = (todo) => {
        setTodo(todo);
        deleteTodo();
    }

    return (
        <Container className={ classes.container } maxWidth='md'>
            { todos.length === 0
                ?
                <Typography variant='h6' color='error'>No Data to display</Typography>
                :
                (<List>
                    { todos.map(todo => {
                        return (
                            <ListItem key={ todo.id } button>
                                <Checkbox
                                    color='primary'
                                    inputProps={{ 'aria-label':'uncontrolled-checkbox' }}
                                />
                                <ListItemText primary={ todo.value } />
                                <ListItemSecondaryAction>
                                    <IconButton edge='end' aria-label='edit'
                                    onClick={ () => handleEdit(todo) }>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton edge='end' aria-label='delete'
                                    onClick={ () => handleDelete(todo) }>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>)
        }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setTodo: (todo) => dispatch(actionTypes.setTodo(todo)),
        deleteTodo: (todo) => dispatch(actionTypes.deleteTodo(todo)),
        setEdit: () => dispatch(actionTypes.setEdit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);