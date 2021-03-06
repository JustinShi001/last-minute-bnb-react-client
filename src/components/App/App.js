import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Apartments from '../apartments/Apartments'
import Apartment from '../apartments/Apartment'
import ApartmentCreate from '../apartments/ApartmentCreate'
import ApartmentEdit from '../apartments/ApartmentEdit'
import Reservations from '../reservations/Reservations'
import Reservation from '../reservations/Reservation'
import ReservationCreate from '../reservations/ReservationCreate'
import ReservationEdit from '../reservations/ReservationEdit'

// import Books from '../books/Books'
// import Book from '../books/Book'
// import BookCreate from '../books/BookCreate'
// import BookEdit from '../books/BookEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render= { (props) => (
            <Apartments match={props.match}/>
          )}/>
          <Route exact path='/reservations' render= { (props) => (
            <Reservations match={props.match}/>
          )}/>
          <Route user={user} path='/apartments/:id' render= { (props) => (
            <Apartment history= {props.history} match={props.match} user={user}/>
          )}/>
          <Route user={user} path='/reservations/:id' render= { (props) => (
            <Reservation history= {props.history} match={props.match} user={user}/>
          )}/>
          <AuthenticatedRoute user={user} path='/create-apartment' render={() => (
            <ApartmentCreate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/apartments/:id/edit' render={({ match }) => (
            <ApartmentEdit alert={this.alert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/reservations/:id/edit' render={({ match }) => (
            <ReservationEdit alert={this.alert} user={user} match={match}/>
          )} />
          <AuthenticatedRoute user={user} path='/create-reservation' render={() => (
            <ReservationCreate alert={this.alert} user={user} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
