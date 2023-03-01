import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import routes from '../routes';
import Header from '../components/Header';
import PollGameDetails from '../containers/PollGameDetails';


export default function Results({
}) {

    const navigate = useNavigate();

    const [gameDetails, setGameDetails] = useState()

    const newCrime = () => {
        navigate(routes.chooseSuspect)
    }

    const leaderboard = gameDetails ? ([].concat(gameDetails?.players)).sort((a,b) => b.score - a.score) : []
console.log('>>> $4', [].concat(gameDetails?.players))
    return (
        <Box>
            <PollGameDetails updateGameDetails={setGameDetails} />
            <Header />
            <Box m={4}>
                <Box mt={4}>
                    <h1>Leaderboard</h1>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Player</b></TableCell>
                            <TableCell><b>Score</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leaderboard.map(player => (
                            <TableRow key={player.playerId}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button onClick={newCrime} variant='contained' sx={{marginTop: '24px'}}>New Crime</Button>
            </Box>
        </Box>
    )
}
