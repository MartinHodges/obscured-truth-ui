import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Button, IconButton, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import styled from '@emotion/styled';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import routes from '../routes';
import Header from '../components/Header';
import {
    fetchGameByUuid,
    recordFacts,
} from '../store/games/actions'
import {
    selectGameDetails
} from '../store/games/selectors'
import { useState } from 'react';

export function Suspect({
    doFetchGameByUuid,
    doRecordFacts,
    gameDetails,
}) {

    const navigate = useNavigate();

    const [dto, setDto] = useState({
        fact1: '',
        truth1: false,
        fact2: '',
        truth2: false,
        fact3: '',
        truth3: false,
    })

    const startInterview = () => {
        doRecordFacts(gameDetails?.uuid, [
            {
                sequence: 1,
                fact: dto.fact1,
                truth: dto.truth1
            },
            {
                sequence: 2,
                fact: dto.fact2,
                truth: dto.truth2
            },
            {
                sequence: 3,
                fact: dto.fact3,
                truth: dto.truth3
            },
        ])
        navigate(routes.interviewAsSuspect + "/" + gameDetails.uuid)
    }

    const onChange = (event) => {
        const {name, value} = event.target
        setDto({...dto, [name]: value})
    }

    const makeTrue = (fact) => {
        setDto({...dto, [fact]: true})
    }

    const makeFalse = (fact) => {
        setDto({...dto, [fact]: false})
    }

    const deductions = gameDetails?.round?.numberDeductions || 0
    const detectives = gameDetails?.round?.numberDetectives || 1

    return (
        <Box>
            <Header />
            <Box m={4}>
                <Box mt={4}>
                    <h1>Your suspect statement</h1>
                </Box>
                <h2>Suspect: {gameDetails?.round?.suspect.name}</h2>
                <Typography>Describe your 3 statements</Typography>
                <Typography>Enter a word or two to help people remember which statement is which and then press <b>Start Interview</b>.</Typography>
                <Box mt={1} mb={1}>
                    <Typography><b>Remember: Do not give the game away and mention which is a truth and which is made up!</b></Typography>
                </Box>
                <Box mt='12px'>
                    <BorderLinearProgress variant='determinate' value={100 * deductions / detectives} fullWidth/>
                    <Typography>Deductions Made: {deductions}/{detectives}</Typography>
                </Box>

                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <h2>Statement 1</h2>
                            <TextField fullWidth name='fact1' onChange={onChange}/>
                            <Box display='flex'  justifyContent='center' alignItems='center'>
                                <Box mr='48px' display='flex' alignItems='center'>
                                    Truth
                                    <IconButton onClick={() => makeTrue('truth1')}>
                                       {dto.truth1 ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                                    </IconButton>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    Made Up
                                    <IconButton onClick={() => makeFalse('truth1')}>
                                       {!dto.truth1 ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <h2>Statement 2</h2>
                            <TextField fullWidth name='fact2' onChange={onChange}/>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Box mr='48px' display='flex' alignItems='center'>
                                    Truth
                                    <IconButton onClick={() => makeTrue('truth2')}>
                                        {dto.truth2 ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                                    </IconButton>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    Made Up
                                    <IconButton onClick={() => makeFalse('truth2')}>
                                        {!dto.truth2 ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display='flex' flexDirection='column' justifyContent='center'>
                            <h2>Statement 3</h2>
                            <TextField fullWidth name='fact3' onChange={onChange}/>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <Box mr='48px' display='flex' alignItems='center'>
                                    Truth
                                    <IconButton onClick={() => makeTrue('truth3')}>
                                        {dto.truth3 ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                                    </IconButton>
                                </Box>
                                <Box display='flex' alignItems='center'>
                                    Made Up
                                    <IconButton onClick={() => makeFalse('truth3')}>
                                        {!dto.truth3 ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt='24px'>
                    <Button variant='contained' onClick={startInterview}>Start Interview</Button>
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    gameDetails: selectGameDetails(),
  });
  
  const mapDispatchToProps = {
    doFetchGameByUuid: fetchGameByUuid,
    doRecordFacts: recordFacts,
  }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  export default withConnect(Suspect);

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