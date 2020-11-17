/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Filters from './components/filters/Filters';
import EventList from './components/EventList';
import EventListVoyageNantes from './components/EventListVoyageNantes';
import BiblioList from './components/BiblioList';
import Footer from './components/Footer';
import Contact from './components/Contact';
import DetailEvent from './components/DetailEvent';

const H1 = styled.h1`
  font-size: 1rem;
  margin: 2rem;
`;

const CATEGORY = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`;

const SPAN = styled.span`
  display: flex;
  font-size: 0.75rem;
  margin: 2rem;
  justify-content: left;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.dateUpdate = this.dateUpdate.bind(this);
  }

  dateUpdate(date) {
    this.setState({ date: date });
    console.log('app : ', date);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Grid />
              <Filters dateUpdate={this.dateUpdate} />
              <EventList date={this.state.date} />
              <Footer />
            </Route>
            <Route exact path="/bibliotheques">
              <Navbar />
              <BiblioList />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
            <Route exact path="/voyage">
              <Navbar />
              <CATEGORY>
                <Link to="/animations">
                  <SPAN>Animations estivales</SPAN>
                </Link>
                <Link to="/patrimoine">
                  <SPAN>Journées du patrimoine</SPAN>
                </Link>
                <Link to="/diversite">
                  <SPAN>Autres évènements</SPAN>
                </Link>
              </CATEGORY>
              <H1>Evènements du Voyage à Nantes</H1>
              <EventListVoyageNantes />
              <Footer />
            </Route>
            <Route exact path="/event/:id_manif" component={DetailEvent} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
