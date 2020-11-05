import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    content: {
        width: "800px",
        padding: "50px",
        marginRight: "auto",
        marginLeft: "auto"
    }
}))

const Manage = () => {
    const classes = useStyles()

    return (
        <Paper
            className={classes.content}
        >

        </Paper>
    )
}
export default Manage;