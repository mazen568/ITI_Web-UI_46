import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ py: 8, px: 10, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 6 }}>
        Contact Us
      </Typography>

      <Stack direction="column" spacing={4}>
        <Box>
          <Typography variant="body1" fontWeight="bold" >
            Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your name"
            variant="outlined"
          />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight="bold" >
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
            variant="outlined"
            type="email"
          />
        </Box>

        <Box>
          <Typography variant="body1" fontWeight="bold" >
            Message
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your message"
            variant="outlined"
            multiline
            rows={4}
          />
        </Box>

        <Button
          variant="contained"
          size="large"
          sx={{ width: "fit-content" }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
