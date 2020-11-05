import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    post: {
        padding: "40px"
    }
}))

const Posts = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const classes = useStyles()

    useEffect(() => {
        axios.get('/api/posts/get-all-posts')
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
        
    }, [])

    if (loading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    else if (posts.length === 0){
        return (
            <Grid container justify="center" spacing={3}>
                <Grid item>
                    <Paper className={classes.post}>
                        <Typography variant="h6">
                            Nothing yet!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid container justify="center" spacing={3}>
                {posts != null && posts.length > 0 && posts.map(post =>
                    <Grid item xs={12} sm={4} xl={3}>
                        <Paper className={classes.post}>
                            <Typography variant="h6">{post.title}</Typography>
                            <Typography variant="body1">{post.content}</Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        )
    }
}
export default Posts;