import { Box } from "@mui/material";
import CardItem from "./CardItem";
import homelander from "../assets/homelander.png";

export default function CardsSection() {
    const cardItems = [
        { id: 1, title: "Homelander 1", description: "The world's greatest hero." },
        { id: 2, title: "Homelander 2", description: "The world's greatest hero."},
        { id: 3, title: "Homelander 3", description: "The world's greatest hero."},
        { id: 4, title: "Homelander 4", description: "The world's greatest hero."},
        { id: 5, title: "Homelander 5", description: "The world's greatest hero."},
        { id: 6, title: "Homelander 6", description: "The world's greatest hero."},
    ];

    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 3,
                padding: 5,
            }}
        >
            {cardItems.map((item) => (
                <CardItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={homelander}
                />
            ))}
        </Box>
    );
}
