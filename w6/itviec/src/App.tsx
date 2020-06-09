import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Jobs from './pages/Jobs';
import Login from './pages/Login';
import Detail from './pages/Detail';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { Container } from 'react-bootstrap';
import NotFound from './pages';

function App() {
  const [user, setUser] = useState(false);
  const history = useHistory();

  const ProtectedRoute = (props: any) => {
    if (user === true) {
      return <Route {...props}></Route>;
    } else {
      return <Redirect to="/login" ></Redirect>;
    }
  }

  const signInCallback = () => {
    setUser(true)
    history.push("/")
  }

  const signInNavBar = () => {
    if (user) {
      setUser(false)
      history.push("/")
    } else {
      history.push("/login")
    }
  }

  return (
    <div className="App">
      <Container className="col-9">
        <CustomNavbar user={user} signIn={signInNavBar} />
      </Container>
      <Switch>
        <Route path="/login" exact component={() => <Login signIn={signInCallback}/>} />
        <Route path="/jobs" exact component={() => <Jobs user={user}></Jobs>} />
        <Route path="/" exact component={() => <Jobs user={user}></Jobs>} />
        <ProtectedRoute 
        path="/job/:id" 
        render={(props: any) => <Detail {...props} />} />

        <Route path="*" component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
