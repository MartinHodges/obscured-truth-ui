import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';
import Header from '../components/Header';

export default function Scoreboard() {

    const navigate = useNavigate();

    const playAgain = () => {
        navigate(routes.chooseSuspect)
    }

    const players = [
        {name: '', email: 'chris@cesservices.com.au', ready: false, score: 1000},
        {name: 'John Rey', email: 'john@cesservices.com.au', ready: true, score: 1200},
        {name: 'Rehka', email: 'rekha@cesservices.com.au', ready: true, score: 1100}
    ]

    return (
        <Box>
            <Header />
            <Box m={4}>
                <h1>Scoreboard</h1>
                <Table>
                    <TableHead>
                    <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Score</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map(player => (
                            <TableRow>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Button onClick={playAgain} variant='contained' sx={{marginTop: '24px'}}>Play Again</Button>
            </Box>
        </Box>
    )
}