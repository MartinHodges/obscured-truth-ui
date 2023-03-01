import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Button, TextField, Typography } from '@mui/material'
import {
    Box,
    IconButton,
    Grid,
} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import routes from '../routes';
import Header from '../components/Header';
import PollGameDetails from '../containers/PollGameDetails';
import { enterDeductions } from '../store/games/actions';

export function InterviewAsDetective({
    doEnterDeductions
}) {

    const navigate = useNavigate()

    const [gameDetails, setGameDetails] = useState()
    const [playerDetails, setPlayerDetails] = useState()

    const [dto, setDto] = useState({
        truth1: false,
        truth2: false,
        truth3: false,
    })

    const allege = () => {
        doEnterDeductions(gameDetails?.uuid, [
            {
                sequence: 1,
                truth: dto.truth1
            },
            {
                sequence: 2,
                truth: dto.truth2
            },
            {
                sequence: 3,
                truth: dto.truth3
            },
        ])
        navigate(routes.results)
    }

    const facts = (gameDetails && gameDetails.round && gameDetails.round.facts) ?
        [].concat(gameDetails.round.facts).sort((a,b) => a.sequence - b.sequence)
    :
        [
            {sequence: 11, description: ''},
            {sequence: 12, description: ''},
            {sequence: 13, description: ''},
        ]

    const makeTrue = (fact) => {
        setDto({...dto, [fact]: true})
    }

    const makeFalse = (fact) => {
        setDto({...dto, [fact]: false})
    }

    return (
        <Box>
            <PollGameDetails updateGameDetails={setGameDetails} updatePlayerDetails={setPlayerDetails}/>
            <Header />
            <Box m={4}>
                <Box mt={4}>
                    <h1>The interview</h1>
                </Box>
                <h2>Suspect: {gameDetails?.round?.suspect.name}</h2>
                <Typography>The detectives will now interview the suspect for 5 minutes. Here are your reminder words</Typography>
                {facts.length > 3 ? (
                    <>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <h2>Statement 1</h2>
                                    {facts[0].description}
                                </Box>
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
                            </Grid>
                            <Grid item xs={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <h2>Statement 2</h2>
                                    {facts[1].description}
                                </Box>
                                <Box display='flex'  justifyContent='center' alignItems='center'>
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
                            </Grid>
                            <Grid item xs={4}>
                                <Box display='flex' flexDirection='column' justifyContent='center'>
                                    <h2>Statement 3</h2>
                                    {facts[2].description}
                                </Box>
                                <Box display='flex'  justifyContent='center' alignItems='center'>
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
                            </Grid>
                        </Grid>
                        <Button onClick={allege} variant='contained' sx={{marginTop: '24px'}}>Enter Deduction</Button>
                    </>
                ) : (
                  <Typography>Just fetching your details...</Typography>                      
                )}
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
  });
  
  const mapDispatchToProps = {
    doEnterDeductions: enterDeductions
  }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  export default withConnect(InterviewAsDetective);