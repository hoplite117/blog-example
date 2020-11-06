import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    post: {
        padding: "40px"
    },
    wrapper: {
        marginBottom: "50px",
        marginTop: "30px"
    },
    title: {
        textAlign: "center"
    }
}))

const Nav = () => {
    const [selected, setSelected] = useState("Home")
    const classes = useStyles()
    const path = window.location.pathname

    return (
        <div className={classes.wrapper}>
            <Grid container spacing={1} justify="center" alignItems="center">
                <Grid item>
                    <Typography variant="h4" className={classes.title}>
                        Example Blog
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant={path === "/" ? "contained" : "outlined"}
                        color="primary"
                        href="/"
                    >
                        Home
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant={path === "/manage" ? "contained" : "outlined"}
                        color="primary"
                        href="/manage"
                    >
                        Manage Blog
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant={path === "/new-post" ? "contained" : "outlined"}
                        color="primary"
                        href="/new-post"
                    >
                        Write a New Post
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default Nav;