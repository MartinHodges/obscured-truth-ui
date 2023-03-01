import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import * as GameState from '../constants/GameStates'
import Header from "./Header";

export default function GivingScenario({
    updateState,
    players
}) {

    const startRound = () => {
        updateState(GameState.QUESTIONING);
    }

    return (
        <Box>
            <Header />
            <Box mt={4}>
                <h1>Present Scenarios</h1>
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