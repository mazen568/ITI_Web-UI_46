import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/homelander.png";


export default function Hero() {
    return (
        <Box
            sx={{
                height: "600px",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 2, sm: 5, md: 10 },
                textAlign: 'center',
                color: "white",
            }}
        >
            <Typography variant="h2" component="span" fontWeight="bold">
                Welcome Homelander
            </Typography>
                <Typography variant="h6" component="span" fontWeight="light">
                homelander incoming
            </Typography>

            <Button
                variant="contained"
                size="large"
                sx={{ 
                    mt: 2, 
                    fontWeight: 'bold',
                }}
            >
                View Menu
            </Button>
        </Box>
    );
}

