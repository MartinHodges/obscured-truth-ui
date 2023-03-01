import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import routes from '../routes';
import Header from '../components/Header';
import {
    fetchResults,
} from '../store/games/actions'
import {
    selectResults
} from '../store/games/selectors'
import PollGameDetails from '../containers/PollGameDetails';

export function Results({
    doFetchResults,
    results
}) {

    const [gameDetails, setGameDetails] = useState()
    const [gotResults, setGotResults] = useState(false);

    useEffect(() => {
        if (gameDetails && !gotResults) {
            doFetchResults(gameDetails.uuid)
            setGotResults(true);
        }
    }, [gameDetails])

    const navigate = useNavigate();

    const scores = () => {
        navigate(routes.gameResults)
    }



    const enterDeductions = (player) => {
        const deductions = [].concat(player.deductions).sort((a,b) => a.sequence - b.sequence)
console.log('>>> #3', deductions)
        return deductions.map((deduction, index) => (
            <>
                {deduction.truth === facts[index].truth ?(
                    <TableCell>
                        <Box p='10px' display='flex' justifyContent='center' sx={{borderRadius: '4px', background: 'green', color: 'white'}}>
                            {deduction.truth ? 'Is True!' : 'Is made up!'}
                        </Box>
                    </TableCell>
                ) : (
                    <TableCell>
                        <Box p='10px' display='flex' justifyContent='center' sx={{borderRadius: '4px', background: 'red', color: 'white'}}>
                            {deduction.truth ? 'Is True!' : 'Is made up!'}
                        </Box>
                    </TableCell>
                )}
            </>
        ))
    }

    const facts = (results && results.facts) ? [].concat(results.facts).sort((a,b) => a.sequence - b.sequence) : []
    const players = (results && results.players) ? (results?.players || []).filter(player => player.deductions.length > 0) : []
    console.log('>>> #4', facts)
    return (
        <Box>
            <PollGameDetails updateGameDetails={setGameDetails} />
            <Header />
            <Box m={4}>
                <Box mt={4}>
                    <h1>Results of the Interview</h1>
                </Box>
                <h2>Suspect: {gameDetails?.round?.suspect.name}</h2>
                <Typography>The detectives alleged the following:</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Player</TableCell>
                            <TableCell>Statement 1</TableCell>
                            <TableCell>Statement 2</TableCell>
                            <TableCell>Statement 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Statement</TableCell>
                            {facts.map(fact => (
                                <TableCell>{fact?.description}</TableCell>
                            ))}
                        </TableRow>
                        <TableRow>
                            <TableCell>Suspect</TableCell>
                            {facts.map(fact => (
                                <>
                                    <TableCell>
                                        <Box p='10px' display='flex' justifyContent='center' sx={{borderRadius: '4px', borderStyle: 'solid'}}>
                                            {fact?.truth ? 'Is True!' : 'Is made up!'}
                                        </Box>
                                    </TableCell>
                                </>
                            ))}
                        </TableRow>
                            {players.map(player => (
                                <TableRow>
                                    <TableCell>{player.playerName}{player.wasFirst ? ' (first)' : ''}</TableCell>
                                    {enterDeductions(player)}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <Button onClick={scores} variant='contained' sx={{marginTop: '24px'}}>Scores</Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    results: selectResults(),
  });
  
  const mapDispatchToProps = {
    doFetchResults: fetchResults,
  }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
  export default withConnect(Results);