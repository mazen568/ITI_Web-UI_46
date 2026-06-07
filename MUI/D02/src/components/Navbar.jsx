import {
    AppBar,
    Toolbar,
    Typography,
    Stack,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navItems = ["Home", "Menu", "About", "Contact"];

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
            <Toolbar
                disableGutters
                sx={{
                    justifyContent: "space-between",
                    px: 10
                }}
            >
                <Typography variant="h6">
                    VOUGHT
                </Typography>

                <IconButton
                    color="inherit"
                    onClick={() => setMobileOpen(true)}
                    sx={{ display: { xs: "block", md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Stack
                    direction="row"
                    spacing={3}
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    {navItems.map((item) => (
                        <Typography key={item} >{item}</Typography>
                    ))}
                </Stack>

                <Drawer
                    anchor="right"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        onClick={() => setMobileOpen(false)}
                    >
                        <List>
                            {navItems.map((text) => (
                                <ListItem key={text} disablePadding>
                                    <ListItem
                                    >
                                        <ListItemText primary={text} />
                                    </ListItem>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}