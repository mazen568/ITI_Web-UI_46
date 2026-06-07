import {
    Box,
    Typography,
    Divider,
} from "@mui/material";

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: "#111",
                color: "white",
                py: 6,
                px: { xs: 2, md: 10 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: 2, sm: 4 },
                    width: "100%",
                }}
            >
                <Typography>Facebook</Typography>
                <Typography>Twitter</Typography>
                <Typography>Instagram</Typography>
            </Box>

            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", width: "100%", maxWidth: "400px" }} />

            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                © 2026 VOUGHT. All rights reserved.
            </Typography>
        </Box>
    );
}