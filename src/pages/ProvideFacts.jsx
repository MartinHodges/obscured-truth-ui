import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';

export default function ProvideFacts() {

    const navigate = useNavigate();

    const startInterview = () => {
        navigate(routes.interviewAsDetective)
    }

    const players = [
        {name: '', email: 'chris@cesservices.com.au', ready: false},
        {name: 'John Rey', email: 'john@cesservices.com.au', ready: true},
        {name: 'Rehka', email: 'rekha@cesservices.com.au', ready: true}
    ]

    return (
        <Box>
            <Box mt={4}>
                <h1>Describe your 3 <em>'facts'</em></h1>
            </Box>
            <h2>Player: numero uno</h2>
            <Typography>Enter a word or two to help people remember which fact is which and then press start.</Typography>
            <Typography><b>Remember: Do not give the game away and mention which is a truth and which is made up!</b></Typography>
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
                <Button variant='contained' onClick={startInterview}>Start</Button>
            </Box>
        </Box>
    )
}