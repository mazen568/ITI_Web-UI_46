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
                color: "white",
            }}
        >
            <Typography variant="h2" component="span" fontWeight="bold">
                Welcome Homelander
            </Typography>

            <Button
                variant="contained"
                color="secondary"
                sx={{ 
                    mt: 2, 
                    fontWeight: 'bold',
                    size: "large"
                }}
            >
                GET STARTED
            </Button>
        </Box>
    );
}

