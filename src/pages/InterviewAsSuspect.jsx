import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { LinearProgress, linearProgressClasses, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';
import Header from '../components/Header';
import PollGameDetails from '../containers/PollGameDetails';
import styled from '@emotion/styled';

export default function InterviewAsSuspect({
}) {

    const navigate = useNavigate();
    const {gameId} = useParams();

    const [gameDetails, setGameDetails] = useState();

    const deductions = gameDetails?.round?.numberDeductions || 0
    const detectives = gameDetails?.round?.numberDetectives || 1

    useEffect(() => {
        if (deductions >= detectives) {
            navigate(routes.roundResults);
        }
    }, [deductions])

    useEffect(() =>{
        console.log('>>> #1', gameDetails)
        if (gameDetails?.status === 'DEDUCTIONS_PROVIDED') {
            navigate(routes.results)
        }
    }, [gameDetails])

    const facts = (gameDetails && gameDetails.round && gameDetails.round.facts) ?
        [].concat(gameDetails.round.facts).sort((a,b) => a.sequence - b.sequence)
    :
        [
            {sequence: 11, description: ''},
            {sequence: 12, description: ''},
            {sequence: 13, description: ''},
        ]
console.log('>>> #11', gameDetails, facts)
    return (
        <Box>
            <PollGameDetails gameId={gameId} updateGameDetails={setGameDetails} />
            <Header />
            <Box m={4}>
                <Box mt={4}>
                    <h1>The interview</h1>
                </Box>
                <h2>Suspect: {gameDetails?.round?.suspect.name}</h2>
                <Typography>
                    The detectives will now interview you for 5 minutes.
                    Here are your reminder words.
                    Once they have finished, you will get to find out what they have alleged!
                </Typography>
                <Box mt='12px'>
                    <BorderLinearProgress variant='determinate' value={100 * deductions / detectives} fullWidth/>
                    <Typography>Deductions Made: {deductions}/{detectives}</Typography>
                </Box>
                {facts.length >= 3 ? (
                    <>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <h2>Statement 1</h2>
                                    {facts[0].description}
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <h2>Statement 2</h2>
                                    {facts[1].description}
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <h2>Statement 3</h2>
                                    {facts[2].description}
                                </Box>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                  <Typography>Just fetching your details...</Typography>                      
                )}
            </Box>
        </Box>
    )
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));