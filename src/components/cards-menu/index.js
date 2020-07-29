import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

export default function CardsMenu(props) {
  const { categories } = props
  const history = useHistory()

  const useStyles = makeStyles({
    section: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap:'wrap'
    },
    card: {
      width: '100%',
      maxWidth: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '8px 0'
    },
    media: {
      width: '150px',
      height: '150px',
      objectFit: 'contain',
      margin: '0 auto'
    },
  });

  const classes = useStyles();

  const detalhes = (evento, detalhes) => {
    evento.preventDefault()
    evento.stopPropagation()

    localStorage.setItem('detalhes', JSON.stringify(detalhes))
    history.push(`/detalhes`)
  }

  const fazerPedido = pedido => {
    console.log()
  }

  return (
    <section className={classes.section}>
      <h1 style={{width:'100%'}}>{categories.name}</h1>
      {
        categories.items.map(item => (
          <Card key={item.id} className={classes.card}>
          
          <CardActionArea onClick={e => detalhes(e, item)}>
            <CardMedia className={classes.media} image={item.image} title={item.name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">{item.description}</Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.unit_price)}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button onClick={e => detalhes(e, item)} size="small" color="primary">DETALHES</Button>
            <Button onClick={() => fazerPedido(item)} size="small" color="primary">ADICIONAR PEDIDO</Button>
          </CardActions>
        </Card>
        ))
      }
    </section>
  );
}