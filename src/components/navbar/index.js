import { AppBar, Button, Drawer, Toolbar, IconButton, Typography } from '@mui/material'
import NavbarCoso from '../navbarcoso/index'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"


const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (

        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        size='large'
                        onClick={() => setOpen(true)}>
                        <MenuIcon></MenuIcon>
                        
                    </IconButton>
                    <Typography variant="h6" color="inherit" sx={{flexGrow: 1}}>News</Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}>
                <NavbarCoso />
            </Drawer>

        </>
    )

}

export default Navbar