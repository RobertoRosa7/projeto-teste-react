import React, { Component } from 'react';
import './App.css';
import Routes from './routes'
import { connect } from 'react-redux'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <Routes />
      </section>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
})

export default connect(mapStateToProps)(App);
