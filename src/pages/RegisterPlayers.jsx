import { useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';
import Header from '../components/Header';
import {
    fetchGameByUuid,
    start,
} from '../store/games/actions'
import PollGameDetails from '../containers/PollGameDetails';

export function RegisterPlayers({
    doFetchGameByUuid,
    doStart,
}) {

    const navigate = useNavigate()
    const [gameDetails, setGameDetails] = useState()

    const { REACT_APP_URL } = process.env;

    const play = () => {
        doStart(gameDetails?.uuid)
        navigate(routes.chooseSuspect)
    }

    return (
        <Box>
            <PollGameDetails updateGameDetails={setGameDetails}/>
            <Header />
            <Box m={4}>
                <h1>Register Players</h1>
                <Box mb={4}>
                    <Typography>Ask your players to register at this address: <a href={REACT_APP_URL + routes.registerAsPlayer}>{REACT_APP_URL}</a> and register against the following game number:</Typography>
                    <h2>{gameDetails?.pin}</h2>
                </Box> 
                           
                <Table>
                    <TableHead>
                    <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Score</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {gameDetails?.players.map(player => (
                            <TableRow key={player.uuid}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Button onClick={play} variant='contained' sx={{marginTop: '24px'}}>Play Game</Button>
            </Box>
        </Box>
    )
}


const mapStateToProps = createStructuredSelector({
});
  
const mapDispatchToProps = {
    doFetchGameByUuid: fetchGameByUuid,
    doStart: start,
}
  
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
  
export default withConnect(RegisterPlayers);
  