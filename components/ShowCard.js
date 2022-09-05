import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShowCard(props) {
  return (
    <Card sx={{ maxWidth: 290, minHeight: 549 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="350"
        image={props.image.original}
        sx={{objectFit: 'fill'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.summary? props.summary.replace(/(<([^>]+)>)/ig, "").substring(0, 180): "No Description Available"}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" href={props.url}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
