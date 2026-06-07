import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function MenuItem({ title, desc, price, image }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="340"
        image={image}
        alt={title}
      />
      <CardContent >
        <Typography variant="h5"  sx={{ fontWeight: "bold", mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2"  sx={{ mb: 2 }}>
          {desc}
        </Typography>
        <Typography variant="h6"  sx={{ fontWeight: "bold" }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
