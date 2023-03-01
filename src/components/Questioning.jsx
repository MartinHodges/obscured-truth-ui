import { Box, Button, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import * as GameState from '../constants/GameStates'

export default function Questioning({
    updateState,
    players
}) {

    const startRound = () => {
        updateState(GameState.GIVING_SCENARIO);
    }

    return (
        <Box>
            <Box mt={4}>
                <h1>Describe your 3 <em>'facts'</em></h1>
            </Box>
            <h2>Player: numero uno</h2>
            <Grid container>
                <Grid item xs={4}>
                    <Box display='flex'  justifyContent='center'>
                        <h2>Statement 1</h2>
                    </Box>
                    <Box display='flex'  justifyContent='center' alignItems='center'>
                        <Box mr='48px' display='flex' alignItems='center'>
                            Truth
                            <IconButton>
                                <RadioButtonUncheckedIcon />
                            </IconButton>
                        </Box>
                        <Box display='flex' alignItems='center'>
                            Made Up
                            <IconButton>
                                <RadioButtonUncheckedIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display='flex'  justifyContent='center'>
                        <h2>Statement 2</h2>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box display='flex'  justifyContent='center'>
                        <h2>Statement 3</h2>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}