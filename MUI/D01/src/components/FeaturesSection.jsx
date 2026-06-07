import { Box, Typography, Paper } from "@mui/material";
import RocketIcon from '@mui/icons-material/Rocket';
import PaletteIcon from '@mui/icons-material/Palette';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

export default function FeaturesSection() {
  const features = [
    { id: 1, title: "Speed", icon: <RocketIcon fontSize="large" color="secondary" />, desc: "Lightning fast performance for a seamless user experience." },
    { id: 2, title: "Design", icon: <PaletteIcon fontSize="large" color="secondary" />, desc: "Stunning, pixel-perfect visuals that capture attention." },
    { id: 3, title: "Responsive", icon: <PhoneIphoneIcon fontSize="large" color="secondary" />, desc: "Perfectly optimized for any device, anywhere." },
  ];

  return (
    <Box
      sx={{
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        gap: 4,
        backgroundColor: "#272727ff",
      }}
    >
      {features.map((f) => (
        <Paper
          key={f.id}
          elevation={20}
          sx={{
            padding: "30px",
            width: "300px",
            textAlign: "center",
            backgroundColor: "#121212",
            color: "white",
            borderRadius: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="white">
              {f.title}
            </Typography>
            <Box sx={{ color: "white", display: "flex" }}>
              {f.icon}
            </Box>
          </Box>
          <Typography sx={{ mt: 1 }}>
            {f.desc}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}