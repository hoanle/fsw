import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Detail from './pages/Detail';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { Container } from 'react-bootstrap';
import NotFound from './pages/Login';
import AuthenticationState from './types/AuthenticationState';

function App() {
  const authentication: AuthenticationState = useSelector((state: any) => state.authenticationReducer);

  const history = useHistory();

  const ProtectedRoute = (props: any) => {
    if (authentication.loggedIn) {
      return <Route {...props}></Route>;
    } else {
      return <Redirect to="/login" ></Redirect>;
    }
  }

  return (
    <div className="App">
      <Container className="col-9">
        <CustomNavbar />
      </Container>
      <Switch>
        <Route path="/login" exact component={() => <Login />} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/" exact component={Jobs} />
        <ProtectedRoute 
        path="/job/:id" 
        render={(props: any) => <Detail {...props} />} />

        <Route path="*" component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
