import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    post: {
        padding: "40px"
    }
}))

const LoginMenu = () => {
    if (user === true){
        return (
            <Grid container spacing={3} justify="flex-end">
                <Grid item>
                    <Button
                        variant="outlined"
                        size="small"
                        href="/logout"
                    >
                        Logout
                    </Button>
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid container spacing={3} justify="flex-end">
                <Grid item>
                    <Button
                        variant="outlined"
                        size="small"
                        href="/login"
                    >
                        Login
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        size="small"
                        href="/register"
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        )
    }

}
export default LoginMenu;