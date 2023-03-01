import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import routes from '../routes';

export default function Home({
}) {

    const navigate = useNavigate();

    const goHome = () => {
        navigate(routes.registerGame);
    }

    const goRegister = () => {
        navigate(routes.registerAsPlayer);
    }

    return (
        <Box>
            <Box display='flex' justifyContent='center' sx={{minHeight: '48px', backgroundColor: 'purple', color: 'white'}}>
               <h1>Obscured Truth!</h1>
            </Box>

            <Box m={4}>
                <h1>Register New Game</h1>
                <Button onClick={goHome} variant='contained' sx={{marginTop: '24px'}}>Go!</Button>
                <h1>Register As Player</h1>
                <Button onClick={goRegister} variant='contained' sx={{marginTop: '24px'}}>Go!</Button>
            </Box>
        </Box>
    )
}
