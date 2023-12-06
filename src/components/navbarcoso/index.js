import { Box } from "@mui/system"
import { List, ListItem, ListItemText, ListItemIcon, Divider, ListItemButton } from "@mui/material"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"

const NavbarCoso = () => {
    return (
        <>
            <Box sx={{ width: 250}}>
                <nav>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox"></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts"></ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton
                                component="a"
                                href="#"
                            >Trash</ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton
                                component="a"
                                href="#"
                            >Spam</ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
        </>
    )
}

export default NavbarCoso