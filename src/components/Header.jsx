import { Box } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {

    return (
        <Box display='flex' justifyContent='center' sx={{minHeight: '48px', backgroundColor: 'purple', color: 'white'}}>
            <Box display='flex' alignItems='center'>
                <h1>Obscured Truth!</h1>
                <SearchIcon />
            </Box>
        </Box>
    )
}
