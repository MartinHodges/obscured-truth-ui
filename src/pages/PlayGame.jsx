import { useEffect, useState } from 'react'
import { Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import {
    Box,
    Grid,
} from '@mui/material'
import * as GameState from '../constants/GameStates'
import ChoosePlayer from '../components/ChoosePlayer'
import Prepping from '../components/Prepping'
import GivingScenario from '../components/GivingScenario'
import Questioning from '../components/Questioning'
import Guessing from '../components/Guessing'
import Complete from '../components/Complete'
import Header from '../components/Header'

export default function Home() {

    const [time, setTime] = useState(5000)
    const [playing, setPlaying] = useState(false)
    const [gameState, setGameState] = useState(GameState.NOT_PLAYING)

    const players = [
        {name: 'Chris', score: 10, played: false},
        {name: 'John Rey', score: 15, played: true},
        {name: 'Rehka', score: 3, played: true}
    ]
    
    useEffect(() => {
        if (time > 0) {
            const interval = setTimeout(() => {
                setTime(time - 100)
            }, 100)
            return () => clearInterval(interval);
        } else {
            setPlaying(false)
        }
    }, [time])
    
    const startRound = () => {
        setTime(5000);
        setPlaying(true)
    }

    const gamePanel= () => {
        switch (gameState) {
            case GameState.NOT_PLAYING:
                return <ChoosePlayer updateState={setGameState} players={players}/>
            case GameState.PREPPING:
                return <Prepping updateState={setGameState} players={players}/>
            case GameState.GIVING_SCENARIO:
                return <GivingScenario updateState={setGameState} players={players}/>
            case GameState.QUESTIONING:
                return <Questioning updateState={setGameState} players={players}/>
            case GameState.GUESSING:
                return <Guessing updateState={setGameState} players={players}/>
            case GameState.COMPLETE:
                return <Complete updateState={setGameState} players={players}/>
        }
        return <Typography>Something went wrong, please refresh your browser</Typography>
    }

    return (
        <Box>
            <Header />

            <Box m={4}>
                {gamePanel()}
            </Box>
        </Box>
    )
}