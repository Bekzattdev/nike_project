import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ i, deleteProduct }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia sx={{ height: 500 }} image={i.img} title="green iguana" />
      <CardContent>
        <Typography
          sx={{ fontSize: "17px", fontWeight: "bold" }}
          gutterBottom
          component="div"
        >
          {i.name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {i.type}
        </Typography>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="body2"
          color="text.secondary"
        >
          ${i.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => deleteProduct(i.id)} size="small">
          Delete
        </Button>
        <Button onClick={() => navigate(`/edit/${i.id}`)} size="small">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
