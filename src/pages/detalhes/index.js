import React from "react";
import { Card, CardActionArea, CardMedia, makeStyles, CardActions, Button, CardContent, Typography, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowBack from '@material-ui/icons/ArrowBack'

export default function Detalhes () {
  
  const detalhes = JSON.parse(localStorage.getItem('detalhes'))
  const history = useHistory()

  const useStyles = makeStyles({
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap:'wrap'
    },
    card: {
      width: '100%',
      maxWidth: '650px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0 auto'
    },
    media: {
      width: '150px',
      height: '150px',
      objectFit: 'contain',
      margin: '0 auto'
    },
    detalhes: {
      width: '100%',
      maxWidth: '768px',
      margin: '0 auto',
      padding: '20px 0'
    }
  });

  const classes = useStyles();

  const voltar = () => {
    history.push('/')
  }
  return (
    <section className={classes.detalhes}>
      <IconButton onClick={voltar}  aria-label="show more" color="default">
        <ArrowBack />
      </IconButton>
       <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={detalhes.image} title={detalhes.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{detalhes.name}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">{detalhes.description}</Typography>
            <Typography gutterBottom variant="h5" component="h2">
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(detalhes.unit_price)}
              </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">FAZER PEDIDO</Button>
        </CardActions>
      </Card>
    </section>
  )
}