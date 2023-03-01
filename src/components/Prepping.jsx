import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import * as GameState from '../constants/GameStates'

export default function Prepping({
    updateState,
    players
}) {

    const startQuestions = () => {
        updateState(GameState.GIVING_SCENARIO);
    }

    return (
        <Box>
            <Box mt={4}>
                <h1>Describe your 3 <em>'facts'</em></h1>
            </Box>
            <h2>Player: numero uno</h2>
            <Typography>Enter a word or two to help people remember which fact is which and then press start.</Typography>
            <Grid container spacing={1}>
            <Grid item xs={4}>
                    <Box display='flex' flexDirection='column' justifyContent='center'>
                        <h2>Statement 1</h2>
                        <TextField fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display='flex' flexDirection='column' justifyContent='center'>
                        <h2>Statement 2</h2>
                        <TextField fullWidth />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display='flex' flexDirection='column' justifyContent='center'>
                        <h2>Statement 3</h2>
                        <TextField fullWidth />
                    </Box>
                </Grid>
            </Grid>
            <Box mt='24px'>
                <Button variant='contained' onClick={startQuestions}>Start</Button>
            </Box>
        </Box>
    )
}