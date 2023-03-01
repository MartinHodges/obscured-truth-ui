
import { useEffect, useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
    fetchGameByUuid,
} from '../store/games/actions'
import {
    selectGameDetails,
    selectPlayerDetails,
    selectLoading,
} from '../store/games/selectors'
import { Typography } from '@mui/material';

function PollGameDetails({
    updateGameDetails,
    updatePlayerDetails,
    gameId,

    doFetchGameByUuid,
    gameDetails,
    playerDetails,
    loading,
}) {
    const [load, setLoad] = useState(0);

    const getStatus = () => {
        if (playerDetails) {
            doFetchGameByUuid(playerDetails.gameId)
        } else if (gameId) {
            doFetchGameByUuid(gameId)
        }
        if (updateGameDetails) {
            updateGameDetails(gameDetails)
        }
        if (updatePlayerDetails) {
            updatePlayerDetails(playerDetails)
        }
        setLoad(load + 1)
    }

    useEffect(() => {
        if (!loading) {
            const timer = setInterval(() => {
                getStatus()
            }, 1000)
            return () => clearInterval(timer)
        }
    })

    useEffect(() => {
        getStatus()
    },[])

    return (
        <Typography>Team: {gameDetails?.name} Pin: {gameDetails?.pin} State: {gameDetails?.state} Player: {playerDetails?.name}</Typography>
    )
}

const mapStateToProps = createStructuredSelector({
    gameDetails: selectGameDetails(),
    playerDetails: selectPlayerDetails(),
    loading: selectLoading(),
  });
  
  const mapDispatchToProps = {
    doFetchGameByUuid: fetchGameByUuid,
  }
  
  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );
  
export default withConnect(PollGameDetails);