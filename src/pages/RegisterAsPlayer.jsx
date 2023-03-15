import { useEffect, useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Button, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';
import {
    fetchGameByUuid,
    fetchGameByPin,
    registerPlayer,
} from '../store/games/actions'
import {
    selectGameDetails
} from '../store/games/selectors'
import Header from '../components/Header';

export function RegisterAsPlayer({
    doFetchGameByUuid,
    doFetchGameByPin,
    doRegisterPlayer,
    gameDetails,
}) {

    const navigate = useNavigate();
    const { gameId } = useParams();

    const [dto, setDto] = useState({
        playerName: String,
    })

    useEffect(() => {
        if (gameId) {
            doFetchGameByUuid(gameId)
        }
    }, [gameId])

    const findGame = () => {
        if (dto.pin) {
            doFetchGameByPin(dto.pin)
        }
    }

    const newGame = () => {
        navigate(routes.registerGame)
    }

    const joinTeam = () => {
        console.log('>>> ?', gameDetails)
        if (gameDetails) {
            doRegisterPlayer(gameDetails.pin, {
                name: dto.playerName
            })
            navigate(routes.chooseSuspect)
        }
    }

    const onChange = (event) => {
        const {name, value} = event.target;
        setDto({...dto, [name]: value})
    }

    return (
        <Box>
            <Header />

            <Box m={4}>
                {gameDetails ? (
                    <>
                        <h1>Register as Player{gameDetails && (' for Team: ' + gameDetails.name)}</h1>

                        <Box mb={4}>
                            <Grid container spacing={2} alignItems='center'>
                                <Grid item xs={4}>
                                    <Typography>Your Player Name:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name='playerName'
                                        value={dto.playerName}
                                        fullWidth
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                            </Grid>
                        </Box> 

                        <Button onClick={joinTeam} variant='contained' sx={{marginTop: '24px'}}>Join Game</Button>
                    </>
                ) : (
                    <>
                        <h1>Find your game</h1>
                        <Box mb={4}>
                            <Grid container spacing={2} alignItems='center'>
                                <Grid item xs={4}>
                                    <Typography>Enter your team's PIN:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name='pin'
                                        type='number'
                                        value={dto.pin}
                                        fullWidth
                                        onChange={onChange}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                            </Grid>
                        </Box> 
                        <Box display="flex">
                            <Button disabled={!dto.pin || !dto.pin.length} onClick={findGame} variant='contained' sx={{marginTop: '24px'}}>Find Game</Button>
                            <Button onClick={newGame} variant='outlined' sx={{ml: '24px', marginTop: '24px'}}>Create Game</Button>
                        </Box>
                    </>
                )}  
            </Box>
        </Box>
    )
}


const mapStateToProps = createStructuredSelector({
    gameDetails: selectGameDetails(),
  });
  
  const mapDispatchToProps = {
    doFetchGameByUuid: fetchGameByUuid,
    doFetchGameByPin: fetchGameByPin,
    doRegisterPlayer: registerPlayer,
  }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  export default withConnect(RegisterAsPlayer);