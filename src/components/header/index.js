import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Assignment from '@material-ui/icons/Assignment'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: theme.palette.common.black,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  resumo: {
    width: '500px',
    height: '350px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    background: 'white',
  },
  card: {
    width:'100%',
    height: '150px',
  }
}));

function PrimarySearchAppBar(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [total, settotal] = React.useState([])
  const pedidos = JSON.parse(localStorage.getItem('pedidos')) || []

  const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // console.log(db)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = 'primary-search-account-menu';
  
  const removerPedido = pedido => {
    const index = pedidos.findIndex(i => i.id === pedido.id)
    if (index >= 0) pedidos.splice(0, index)
    if (pedidos.length < 1) localStorage.removeItem('pedidos')
  }
  
  const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem className={classes.resumo} onClick={handleMenuClose}>
        <div className={classes.card}>
            {
              pedidos.map(pedido => (
                <Card key={pedido.id} style={{margin: '8px 0'}}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={pedido.image} title={pedido.name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{pedido.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{pedido.description}</Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.unit_price)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button onClick={() => removerPedido(pedido)} size="small" color="secondary">EXCLUIR</Button>
                </CardActions>
              </Card>
              ))
            }
          </div>
       
      </MenuItem>
      <CardActions style={{justifyContent: 'space-between'}}>
        <Typography gutterBottom variant="h5" component="h2">TOTAL {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</Typography>
        <Button size="medium" color="primary">FINALIZAR</Button>
      </CardActions>
    </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';

  // const renderMobileMenu = (
  //   <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="default">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="default">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>

  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="default">
  //         <Badge badgeContent={17} color="secondary">
  //           <Assignment />
  //         </Badge>
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  
  return (
     <div className={classes.grow}>
     <AppBar position="static" style={{background: 'white'}}>
       <Toolbar>
         <IconButton edge="start" className={classes.menuButton} color="default" aria-label="open drawer">
           <MenuIcon />
         </IconButton>
         <Typography className={classes.title} variant="h6" noWrap>Cardápio Digital</Typography>
         {/* <div className={classes.search}>
           <div className={classes.searchIcon}>
             <SearchIcon />
           </div>
           <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }}/>
         </div> */}
         <div className={classes.grow} />
         <div className={classes.sectionDesktop}>
           {/* <IconButton aria-label="show 4 new mails" color="default">
             <Badge badgeContent={4} color="secondary">
               <MailIcon />
             </Badge>
           </IconButton>
           <IconButton aria-label="show 17 new notifications" color="default">
             <Badge badgeContent={17} color="secondary">
               <NotificationsIcon />
             </Badge>
           </IconButton> */}
           <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="default">
             {/* <AccountCircle /> */}
             <Badge badgeContent={pedidos.length} color="primary">
               {/* <NotificationsIcon /> */}
               {/* <MailIcon /> */}
               <Assignment />
             </Badge>
           </IconButton>
         </div>
         {/* <div className={classes.sectionMobile}>
           <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="default">
             <MoreIcon />
           </IconButton>
         </div> */}
       </Toolbar>
     </AppBar>
     {/* {renderMobileMenu} */}
     {renderMenu}
   </div>        
  );
}

const mapStateToProps = (state) => {
  return {
      categories: state,
  }
}

export default connect(mapStateToProps)(PrimarySearchAppBar)