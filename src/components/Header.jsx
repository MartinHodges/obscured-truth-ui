import { ReactElement } from "react"
import { Box } from "@mui/material"

export default function Header() {

    return (
        <Box display='flex' justifyContent='center' sx={{minHeight: '48px', backgroundColor: 'purple', color: 'white'}}>
            <h1>Obscured Truth !</h1>
        </Box>
    )
}
