import { useEffect, useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes'
import {
    chooseSuspect,
} from '../store/games/actions'
import PollGameDetails from '../containers/PollGameDetails';
import Header from '../components/Header';


export function ChooseSuspect({
    doChooseSuspect,
}) {

    const navigate = useNavigate();
    const [gameDetails, setGameDetails] = useState();
    const [playerDetails, setPlayerDetails] = useState()

    useEffect(() => {
        if (gameDetails?.state === "SUSPECT_ASSIGNED") {
            if (gameDetails.round.suspect.playerId === playerDetails.playerId) {
                navigate(routes.suspect)
            } else {
                navigate(routes.detective)
            }
        }
    }, [gameDetails])

    const becomeSuspect = (suspectId) => {
        doChooseSuspect(gameDetails?.uuid, suspectId)
    }
    const players = gameDetails ? [].concat(gameDetails?.players).sort((a,b) => a.name.localeCompare(b.name)) : []

    const waiting = gameDetails && gameDetails.state === 'WAITING'

    return (
        <Box>
            <PollGameDetails updateGameDetails={setGameDetails} updatePlayerDetails={setPlayerDetails} />
            <Header />

            <Box m={4}>
                
                <Box mt={4}>
                    <h1>{waiting ? 'Waiting for game to start' : 'Choose a Suspect'}</h1>
                </Box>
                <Table>
                    <TableHead>
                    <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Score</b></TableCell>
                            <TableCell><b>Times As Suspect</b></TableCell>
                            <TableCell><b>Play</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map(player => (
                            <TableRow key={player.playerId}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.score}</TableCell>
                                <TableCell>{player.asSuspect}</TableCell>
                                <TableCell>
                                    {(playerDetails?.playerId === player.playerId) &&
                                        <Button disabled={waiting} onClick={() => becomeSuspect(player.playerId)} variant='contained'>Select</Button>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
});
  
const mapDispatchToProps = {
    doChooseSuspect: chooseSuspect,
}
  
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);
  
export default withConnect(ChooseSuspect);