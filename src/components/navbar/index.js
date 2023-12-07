import { AppBar, Button, Drawer, Toolbar, IconButton, Typography } from '@mui/material'
import NavbarCoso from '../navbarcoso/index'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { Box } from "@mui/system"



const Navbar = () => {

    const navlinks = [
        {
            title: "Home",
            path: "#Home"
        },

        {
            title: "Login",
            path: "#Login"
        },

        {
            title: "Register",
            path: "#Register"
        }
    ]

    const [open, setOpen] = useState(false)
    return (

        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        size='large'
                        onClick={() => setOpen(true)}
                        sx={{display:{sm:"none", xs:"flex"}}}>
                        <MenuIcon></MenuIcon>

                    </IconButton>
                    <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>News</Typography>

                    <Box sx={{display:{xs:"none", sm:"flex"}}}>
                    {
                        navlinks.map(item => (
                            <Button color="inherit"
                                key={item.title}
                                component="a"
                                href={item.path}>
                                {item.title}
                            </Button>
                        ))
                    }
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}>
                <NavbarCoso navlinks={navlinks} />
            </Drawer>

        </>
    )

}

export default Navbar