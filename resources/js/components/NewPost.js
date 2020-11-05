import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    content: {
        width: "600px",
        padding: "50px",
        marginRight: "auto",
        marginLeft: "auto"
    }
}))

const NewPost = () => {
    const [saving, setSaving] = useState(false)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const classes = useStyles()
    const history = useHistory()

    return (
        <Paper
            className={classes.content}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">
                        What's on Your Mind Today?
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="Title"
                        variant="filled"
                        fullWidth
                        onInput={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="Content"
                        multiline
                        variant="filled"
                        rows={10}
                        fullWidth
                        onInput={(e) => {
                            setContent(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setSaving(true)
                            axios.post('/api/posts/create-blog-post', {title, content})
                                .then(() => {
                                    history.push('/')
                                })
                                .catch(() => {
                                    setSaving(false)
                                })
                        }}
                        disabled={title === "" || content === "" || saving}
                        fullWidth
                        size="large"
                    >
                        {saving 
                            ?
                                "Posting..."
                            :
                                "Share Your Thoughts!"
                        }
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default NewPost;