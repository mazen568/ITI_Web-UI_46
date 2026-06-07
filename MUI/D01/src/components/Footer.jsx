import { Box, Typography} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        color: "grey",
      }}
    >
      <Typography variant="body2">
        © 2026 VoughtUI — Built with using MUI
      </Typography>
    </Box>
  );
}
