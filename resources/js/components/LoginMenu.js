import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    post: {
        padding: "40px"
    }
}))

const LoginMenu = () => {
    return (
        <Grid container spacing={3} justify="flex-end">
            <Grid item>
                <Button
                    variant="outlined"
                    size="small"
                >
                    Login
                </Button>
            </Grid>
            <Grid item>
                <Button
                    variant="outlined"
                    size="small"
                >
                    Register
                </Button>
            </Grid>
        </Grid>
    )
}
export default LoginMenu;