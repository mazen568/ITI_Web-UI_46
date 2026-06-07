import { Box, Typography, Button } from "@mui/material";

export default function CtaSection() {
  return (
      <Box
        sx={{
          background: "linear-gradient(90deg,rgb(192, 47, 211) 0%, #050505 100%)",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
          Ready to build something awesome?
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
          }}
        >
          JOIN NOW
        </Button>
      </Box>
  )
}