import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Toolbar: {
        textAlign: 'center',
        height: 80
    },
    heading: {
        margin: 'auto'
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static'>
            <Toolbar className={ classes.toolbar }>
                <Typography className={ classes.heading } variant='h5' align='center'>
                    タスク管理
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;