import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export default function CardItem({ title, description, image }) {
  return (
    <Card sx={{ width: 550, backgroundColor: "#121212", color: "white" }}>
      <CardMedia component="img" height="270" image={image} alt={title} />

      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>

        <Typography sx={{ mt: 1 }}>{description}</Typography>
      </CardContent>

      <CardActions sx={{ padding: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            fontWeight: "bold",
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
}
