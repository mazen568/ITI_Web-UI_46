import {
  Typography,
  Box,
  Grid,
} from "@mui/material";

import heroImage from "../assets/homelander.png";
import MenuItem from "./MenuItem";

export default function Menu() {
  const items = [
    {
      id: 1,
      title: "Grilled Salmon",
      desc: "Fresh grilled salmon with herbs.",
      price: "$15.99",
    },
    {
      id: 2,
      title: "Pasta Carbonara",
      desc: "Creamy pasta with bacon and cheese.",
      price: "$12.99",
    },
    {
      id: 3,
      title: "Cheesecake",
      desc: "Classic New York-style cheesecake.",
      price: "$7.99",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 10 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 6 }}
      >
        Our Menu
      </Typography>

      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid key={item.id} size={{ sm: 12, md: 6, lg: 4 }}>
            <MenuItem
              title={item.title}
              desc={item.desc}
              price={item.price}
              image={heroImage}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}