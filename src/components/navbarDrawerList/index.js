import { Box } from "@mui/system"
import { List, ListItem, ListItemText,ListItemButton } from "@mui/material"


const NavbarDrawer= ({navlinks}) => {
    return (
        <>
            <Box sx={{ width: 250 }}>
                <nav>
                    <List>
                        {navlinks.map(item => (
                            <ListItem disablePadding key={item.title}>
                                <ListItemButton
                                    component="a"
                                    href={item.path}
                                ><ListItemText>{item.title}</ListItemText></ListItemButton>
                            </ListItem>
                        ))}

                    </List>
                </nav>
            </Box>
        </>
    )
}

export default NavbarDrawer