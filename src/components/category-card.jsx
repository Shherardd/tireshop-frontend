import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
export const CategoryCardComponent = ({ titulo, src, path, height = 140 }) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 220 }} >
      <CardActionArea component={Link} to={path}>
        
        <Box sx={{
            height: 160,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        }}>
          <CardMedia
            sx={{
              objectFit: "contain",
              paddingTop: '1.6rem'
            }}
            component="img"
            height={height}
            image={src}
            alt="Categoria"
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CategoryCardComponent.propTypes = {
  titulo: PropTypes.string.isRequired,
  src: PropTypes.string,
  path: PropTypes.string.isRequired,
  height: PropTypes.number,
};
