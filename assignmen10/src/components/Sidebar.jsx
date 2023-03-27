import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PageIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Sidebar(){
    return(
        <Box sx={{ display:'flex', justifyContent:'flex-end' }}>
            <List>
                <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <PageIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Group" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Marketplace" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
                </ListItemButton>
                
                <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
                </ListItemButton>

                <ListItemButton>
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                </ListItemButton>

            </List>
        </Box>
    )
}

export default Sidebar