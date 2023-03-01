import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import * as GameState from '../constants/GameStates'

export default function ChoosePlayer({
    updateState,
    players
}) {

    const startRound = () => {
        updateState(GameState.PREPPING);
    }

    return (
        <Box>
            <Box mt={4}>
                <h1>Choose Player</h1>
            </Box>

        </Box>
    )
}
