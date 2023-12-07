import { Box } from "@mui/system"
import { List, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton } from "@mui/material"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

const NavbarCoso = ({navlinks}) => {
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

export default NavbarCoso