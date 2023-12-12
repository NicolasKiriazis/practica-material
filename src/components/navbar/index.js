import { AppBar, Button, Drawer, Toolbar, IconButton, Typography, Container, ThemeProvider, createTheme, Divider } from '@mui/material'
import NavbarDrawer from '../navbarDrawerList/index'
import { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import { Box } from "@mui/system"
import "./styles.css"



const Navbar = () => {

    // const themeNavbar = createTheme(
    //     {
    //         palette: {
    //             mode: 'light',
    //             primary: {
    //               main: '#8a50b9',
    //             },
    //             secondary: {
    //               main: '#f50057',
    //             },
    //             info: {
    //               main: '#0288d1',
    //             },
    //           },
    //     }
    // )


    const themeButton = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#822cbb',
            },
            secondary: {
                main: '#f50057',
            },
            info: {
                main: '#0288d1',
            },
        },
    })

    const navlinks = [
        {
            title: "Contactanos",
            path: "/contact",

        }
    ]

    const styles = {
        appBar: {
            backgroundImage: 'url("https://i.ibb.co/h2JDyYW/nav-mugi-3.png")',
            backgroundSize: 'cover', // Puedes ajustar esto según tus necesidades
        }
    }

    const [open, setOpen] = useState(false)
    return (

        <>

            <AppBar position='static' style={styles.appBar} sx={{borderRadius:"5px"}}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        size='large'
                        onClick={() => setOpen(true)}
                        sx={{ display: { sm: "none", xs: "flex" } }}>
                        <MenuIcon></MenuIcon>

                    </IconButton>

                    <Container sx={{ flexGrow: { xs: 0, sm: 1 } }}>
                        <Typography variant="title" component="a" href="/" >
                            <img src='https://i.ibb.co/1XTfR31/logopng-blanco.png' alt='logo-mugi' className='logo' height={75}></img>
                        </Typography>
                    </Container>

                    <ThemeProvider theme={themeButton}>

                        <Box sx={{ display: { xs: "none", sm: "flex" } }}>

                            {
                                navlinks.map(item => (
                                    <Button
                                        color="primary"
                                        key={item.title}
                                        component="a"
                                        href={item.path}
                                        variant='contained'>
                                        {item.title}

                                    </Button>
                                ))
                            }
                        </Box>

                    </ThemeProvider>
                </Toolbar>
            </AppBar>

            <Divider/>


            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}>
                <NavbarDrawer navlinks={navlinks} />
            </Drawer>

        </>
    )

}

export default Navbar