import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    content: {
        width: "800px",
        padding: "50px",
        marginRight: "auto",
        marginLeft: "auto"
    },
    centeredText: {
        textAlign: "center"
    }
}))

const Manage = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('/manage/get-all-users')
            .then(response => {
                const res = response
                setUsers(res.data)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    }, [])

    const displayUsers = () => {
        if (loading) {
            return (
                <TableRow>
                    <TableCell scope="row" colSpan={3}>
                        <Typography variant="body1" className={classes.centeredText}>Loading...</Typography>
                    </TableCell>
                </TableRow>
            )
        }
        else if (users.length === 0) {
            return (
                <TableRow>
                    <TableCell scope="row" colSpan={3}>
                        <Typography variant="body1" className={classes.centeredText}>Nothing to display so far!</Typography>
                    </TableCell>
                </TableRow>
            )
        }
        else {
            return (
                <React.Fragment>
                    {users.map(user => (
                        <TableRow>
                            <TableCell>
                                {user.name}
                            </TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            <TableCell align="right">{user.postCount}</TableCell>
                        </TableRow>
                    ))}
                </React.Fragment>
            )
        }
    }

    return (
        <Paper
            className={classes.content}
        >
            <Typography variant="h6">Blog Users</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Post Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayUsers()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default Manage;