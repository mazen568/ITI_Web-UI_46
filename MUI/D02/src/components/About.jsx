import {
  Box,
  Typography,
  Stack
} from "@mui/material";

import heroImage from "../assets/homelander.png";

export default function AboutSection() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", py: 8, px: 10 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
      >
        <Box
          component="img"
          src={heroImage}
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 2,
          }}
        />

        <Stack direction="column" sx={{
          justifyContent: "center"
        }}>

          <Typography variant="h4" mb={2}>
            About Us
          </Typography>

          <Typography>
            We are a family-owned restaurant
            dedicated to serving delicious,
            high-quality meals made from fresh,
            locally sourced ingredients.
            Our mission is to provide an unforgettable dining experience for
            every guest, combining traditional recipes with modern creativity.
            Whether you're here for a quick lunch or a celebratory dinner,
            we welcome you with open arms and warm hearts....Whether you're here for a quick lunch or a
            celebratory dinner, we welcome you with open arms and warm hearts. Step inside,
            and you’ll find more than just great food; you’ll discover a lively gathering place
            where neighbors become friends and families share stories. Every laugh echoing through
            our dining room and every plate cleared is a testament to the community we love so deeply.
            From our kitchen to your table, we are honored to be a part of your daily moments and grand milestones alike.

          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}