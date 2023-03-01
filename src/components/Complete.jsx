import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import * as GameState from '../constants/GameStates'

export default function Complete({
    updateState,
    players
}) {

    const startRound = () => {
        updateState(GameState.NOT_PLAYING);
    }

    return (
        <Box>
            <Box mt={4}>
                <h1>Complete</h1>
            </Box>
            <Table>
                <TableHead>
                <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Score</b></TableCell>
                        <TableCell><b>Play</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map(player => (
                        <TableRow>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.score}</TableCell>
                            <TableCell>{player.played ? 'Played' : <Button onClick={startRound} variant='contained'>Play</Button>}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    )
}