import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({item}) {
    console.log(item)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.pic}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`the price of ${item.name} cost ${item.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
