import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardsMenus from '../../components/cards-menu'
import api from '../../services/api'
import { connect } from 'react-redux'

function Home() {
  const [getCategories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories')
      .then(response => setCategories(response.data))
      .catch((e) => console.error(e));
  },[])

  const useStyles = makeStyles(theme => {
    return {
      page: {
        width: '100%',
        maxWidth: '85%',
        margin: '0 auto',
        padding: theme.spacing(3)
      },
    }
  });

  const classes = useStyles();

  return (
    <section>
      <div className={classes.page}>
        {getCategories.map((cat, i) => (
          <div key={i}>
            <CardsMenus categories={cat}/>
          </div>
        ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
      categories: state
  }
}
export default connect(mapStateToProps)(Home)