import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
    post: {
        padding: "40px"
    },
    loader: {
        textAlign: "center"
    },
    controls: {
        textAlign: "center"
    }
}))

const Posts = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const classes = useStyles()
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [sortOpen, setSortOpen] = useState(false)
    const [sortOn, setSortOn] = useState("title")
    const [searchTerm, setSearchTerm] = useState("")
    const [originalPosts, setOriginalPosts] = useState([])
    const sortOptions = [
        {label: "Title", value: "title"},
        {label: "Author", value: "user"},
        {label: "Posted Date", value: "date"}
    ]

    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = () => {
        axios.get('/posts/get-all-posts')
            .then(response => {
                const res = response
                setPosts(res.data)
                setOriginalPosts(res.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    }

    const displayPosts = () => {
        if (loading) {
            return (
                <div className={classes.loader}>
                    <Typography variant="h6">Loading...</Typography>
                </div>
            )
        }
        else if (posts.length === 0) {
            return (

                <Grid item>
                    <Typography variant="h6">
                        Nothing yet!
                        </Typography>
                </Grid>

            )
        }
        else {
            return (
                <React.Fragment>
                    {posts != null && posts.length > 0 && posts.map(post =>
                        <Grid item xs={12} lg={6} xl={3}>
                            <Paper className={classes.post}>
                                <Grid container justify="space-between">
                                    <Grid item>
                                        <Typography variant="h6">{post.title}</Typography>
                                    </Grid>
                                    {user === true &&
                                        <Grid item>
                                            <Grid container>
                                                <Grid item>
                                                    <IconButton
                                                        onClick={() => {
                                                            console.log("delete")
                                                            setConfirmDeleteOpen(true)
                                                        }}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    }
                                </Grid>
                                <Typography variant="body2">Author: {post.user.name}</Typography>
                                <Typography variant="body1">{post.content}</Typography>
                                <Typography variant="body2">Posted at: {post.created_at}</Typography>
                            </Paper>
                            {confirmDeleteOpen &&
                                <Dialog open={confirmDeleteOpen} onClose={() => setConfirmDeleteOpen(false)}>
                                    <DialogTitle>Are you sure you want to delete this post?</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            This cannot be undone!
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => setConfirmDeleteOpen(false)} color="primary">
                                            Cancel
                                    </Button>
                                        <Button
                                            onClick={() => {
                                                const data = { postId: post.id }
                                                axios.post('/posts/delete-post', data)
                                                    .then(response => {
                                                        setConfirmDeleteOpen(false)
                                                        loadPosts()
                                                    })
                                                    .catch(error => {
                                                        console.log("Delete failed")
                                                    })
                                            }}
                                            color="primary"
                                        >
                                            Delete
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                            }
                        </Grid>
                    )
                    }
                </React.Fragment>
            )
        }
    }


    return (
        <Grid container justify="center" spacing={3}>
            <Grid item xs={12}>
                <div className={classes.controls}>
                    <Grid container justify="center">
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    setSearchOpen(true)
                                }}
                            >
                                <SearchIcon />
                            </IconButton>
                            {searchOpen &&
                                <Dialog
                                    open={searchOpen}
                                    onClose={() => setSearchOpen(false)}
                                    maxWidth="md"
                                    fullWidth
                                >
                                    <DialogTitle>Search Posts</DialogTitle>
                                    <DialogContent>
                                        <TextField
                                            label="Seach Term"
                                            variant="filled"
                                            value={searchTerm}
                                            onInput={(e) => setSearchTerm(e.target.value)}
                                            fullWidth
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => setSearchOpen(false)} color="primary">
                                            Cancel
                                            </Button>
                                        <Button
                                            onClick={() => {
                                                setSearchOpen(false)
                                                setLoading(true)
                                                const searched = originalPosts.filter(x => x.title.toUpperCase().includes(searchTerm.toUpperCase()) || x.content.toUpperCase().includes(searchTerm.toUpperCase()))
                                                setPosts(searched)
                                                setLoading(false)
                                            }}
                                            color="primary"
                                        >
                                            Search
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            }
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => {
                                    setSortOpen(true)
                                }}
                            >
                                <FilterListIcon />
                            </IconButton>
                            {sortOpen &&
                                <Dialog
                                    open={sortOpen}
                                    onClose={() => setSortOpen(false)}
                                    maxWidth="md"
                                    fullWidth
                                >
                                    <DialogTitle>Sort Posts</DialogTitle>
                                    <DialogContent>
                                        <Autocomplete
                                            options={sortOptions}
                                            getOptionLabel={(option) => option.label}
                                            onChange={(option) => setSortOn(option.value)}
                                            value={sortOptions.find(x => x.value === sortOn)}
                                            renderInput={(params) => <TextField {...params} label="Sort By" variant="filled" fullWidth />}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={() => setSortOpen(false)} color="primary">
                                            Cancel
                                            </Button>
                                        <Button
                                            onClick={() => {
                                                setSortOpen(false)
                                                setLoading(true)
                                                const sorted = originalPosts.sort((a, b) => {
                                                    let valueA = a['title']
                                                    let valueB = b['title']
                                                    if (sortOn === "user") {
                                                        valueA = a.user.name
                                                        valueB = b.user.name
                                                    }
                                                    else if (sortOn === "date") {
                                                        valueA = a.created_at
                                                        valueB = b.created_at
                                                    }
                                                    if (valueA < valueB) {
                                                        return -1;
                                                    }
                                                    if (valueA > valueB) {
                                                        return 1;
                                                    }
                                                    // names must be equal
                                                    return 0;
                                                })
                                                setPosts(sorted)
                                                setLoading(false)
                                            }}
                                            color="primary"
                                        >
                                            Sort
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            }
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            {displayPosts()}
        </Grid>
    )
}
export default Posts;