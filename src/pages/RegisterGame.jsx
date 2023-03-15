import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Button, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';
import {
    registerGame
} from '../store/games/actions'
import PollGameDetails from '../containers/PollGameDetails';
import Header from '../components/Header';

export function RegisterGame({
    doRegisterGame,
}) {

    const navigate = useNavigate();

    const [gameDetails, setGameDetails] = useState()
    const [enabled, setEnabled] = useState(true)

    const [dto, setDto] = useState({
        teamName: '',
        playerName: '',
    })

    useEffect(() => {
        if (gameDetails) {
            navigate(routes.registerPlayers + "/" + gameDetails.uuid)
        }
    }, [gameDetails])

    const register = () => {
        setEnabled(false)
        doRegisterGame({
            name: dto.teamName,
            player: {
                name: dto.playerName,
            }
        })
    }

    const onChange = (event) => {
        const {name, value} = event.target;
        setDto({...dto, [name]: value})
    }

    return (
        <Box>
            <PollGameDetails updateGameDetails={setGameDetails} />
            <Header />

            <Box m={4}>
                <h1>Register Game</h1>
                <Box mb={4}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={4}>
                            <Typography>Team  Name:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name='teamName'
                                value={dto.teamName}
                                fullWidth
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
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

                <Button disabled={!enabled} onClick={register} variant='contained' sx={{marginTop: '24px'}}>Register Team</Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
    doRegisterGame: registerGame,
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withConnect(RegisterGame);
