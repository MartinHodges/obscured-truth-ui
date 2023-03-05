import { useEffect, useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button, Typography, IconButton } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import styled from '@emotion/styled';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import routes from '../routes';
import PollGameDetails from '../containers/PollGameDetails';
import { enterDeductions } from '../store/games/actions';
import TimeLeft from '../components/TimeLeft';

function Detective({
    doEnterDeductions
}) {

    const navigate = useNavigate();
    const [dto, setDto] = useState({
        truth1: false,
        truth2: false,
        truth3: false,
    })

    const [gameDetails, setGameDetails] = useState()
    const [playerDetails, setPlayerDetails] = useState()
    const [deductionsSent, setDeductionsSent] = useState(false)
    const [timeExpired, setTimeExpired] = useState(false);

    const deductions = gameDetails?.round?.numberDeductions || 0
    const detectives = gameDetails?.round?.numberDetectives || 1

    useEffect(() => {
        if (deductions >= detectives) {
            navigate(routes.roundResults);
        }
    }, [deductions])

    const sendDeductions = () => {
        doEnterDeductions(playerDetails?.gameId, playerDetails?.playerId, [
            {factSequence: 1, truth: dto.truth1},
            {factSequence: 2, truth: dto.truth2},
            {factSequence: 3, truth: dto.truth3}
        ])
        setDeductionsSent(true);
    }

    const setTruth = (field) => {
        setDto({...dto, [field]: true})
    }

    const setFalse = (field) => {
        setDto({...dto, [field]: false})
    }

    const factsSet = !!(gameDetails?.round?.facts.length === 3)

    const facts = factsSet ?
        [].concat(gameDetails.round.facts)
        .sort((a,b) => a.sequence - b.sequence)
        .map(fact => fact.description)
    :
    [
        'Not yet set',
        'Not yet set',
        'Not yet set',
    ]

    console.log('>>> #6', gameDetails, factsSet)

    return (
        <Box>
            <PollGameDetails updatePlayerDetails={setPlayerDetails} updateGameDetails={setGameDetails}/>
            <Box display='flex' justifyContent='center' sx={{minHeight: '48px', backgroundColor: 'purple', color: 'white'}}>
               <h1>Obscured Truth!</h1>
            </Box>

            <Box m={4}>
                <Box mt={4} display='flex' justifyContent='space-between'>
                    <h1>Detective</h1>
                    <TimeLeft timeSince={gameDetails?.round.questionTimeLeft} maxTime={60} timeExpired={() => setTimeExpired(true)} />
                </Box>
                <Typography>Listen to the suspect's statments and decide which are the truth and which are made up.  Record your answers here and press <b>Send Deductions</b>.</Typography>
                <Box mt={1}>
                    <Typography>Remember there are bonus points for who answered first but, once submitted, you cannot change your answers.</Typography>
                </Box>
                <Box mt='12px'>
                    <BorderLinearProgress variant='determinate' value={100 * deductions / detectives} fullWidth/>
                    <Typography>Deductions Made: {deductions}/{detectives}</Typography>
                </Box>
                <Grid container>
                    <Grid item xs={4}>
                        <h2>Statement 1</h2>
                        <Typography>{facts[0]}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2>Statement 2</h2>
                        <Typography>{facts[1]}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <h2>Statement 3</h2>
                        <Typography>{facts[2]}</Typography>
                    </Grid>
                    <Grid item xs={12} />
                    <Grid item xs={12}>
                        <h3>Enter your deductions:</h3>
                    </Grid>

                    <Grid item xs={4}>
                        <Box display='flex'  justifyContent='center' alignItems='center'>
                            <Box mr='48px' display='flex' alignItems='center'>
                                Truth
                                <IconButton onClick={() => setTruth('truth1')}>
                                    {!dto.truth1 ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                                </IconButton>
                            </Box>
                            <Box display='flex' alignItems='center'>
                                Made Up
                                <IconButton onClick={() => setFalse('truth1')}>
                                    {dto.truth1 ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex'  justifyContent='center' alignItems='center'>
                            <Box mr='48px' display='flex' alignItems='center'>
                                Truth
                                <IconButton onClick={() => setTruth('truth2')}>
                                    {!dto.truth2 ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                                </IconButton>
                            </Box>
                            <Box display='flex' alignItems='center'>
                                Made Up
                                <IconButton onClick={() => setFalse('truth2')}>
                                    {dto.truth2 ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex'  justifyContent='center' alignItems='center'>
                            <Box mr='48px' display='flex' alignItems='center'>
                                Truth
                                <IconButton onClick={() => setTruth('truth3')}>
                                    {!dto.truth3 ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                                </IconButton>
                            </Box>
                            <Box display='flex' alignItems='center'>
                                Made Up
                                <IconButton onClick={() => setFalse('truth3')}>
                                    {dto.truth3 ? <RadioButtonUncheckedIcon /> : <RadioButtonCheckedIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
                <Box mt='24px'>
                    <Button disabled={!factsSet || deductionsSent || !timeExpired} variant='contained' onClick={sendDeductions}>Send Deductions</Button>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
});
  
const mapDispatchToProps = {
    doEnterDeductions: enterDeductions,
}
  
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
  
export default withConnect(Detective);
  
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