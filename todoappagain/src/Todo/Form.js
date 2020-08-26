import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/actions';

const useStyles = makeStyles({
    root: {
        marginTop: 16,
        marginBottom: 16,
        padding: 16,
        boxShadow: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)'
    },
    button: {
        marginTop: 16
    }
});

const Form = ({ title, setTitle, addTodo, editTodo, edit, error, setError }) => {
    const classes = useStyles();
    const handleChange = (event) => {
        const title = event.target.value;

        setTitle(title);
        if (title.length === 0) {
            setError('Please type something!');
        } else {
            setError('');
        }
    }

    const handleClick = () => {
        if (title.length === 0) {
            setError('Please type something!');
            return;
        }
        if (edit) {
            editTodo();
        } else {
            addTodo();
        }
    }
    return (
        <Container maxWidth='sm' className={ classes.root }>
            <Grid container alignItems='center'>
                <Grid todo md={ 12 }>
                    <TextField value={ title } onChange={handleChange} 
                    error={ !!error } helperText={ error } id='outlined-basic'
                    fullWidth label="Enter Title" multiline variant="outlined" />
                </Grid>
                <Grid todo md={ 12 }>
                    <Button className={ classes.button } variant="contained" 
                    color="primary" onClick={handleClick}>
                        {edit ? "Edit" : "Add"}
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addTodo: () => dispatch(actionTypes.addTodo()),
        editTodo: () => dispatch(actionTypes.editTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);