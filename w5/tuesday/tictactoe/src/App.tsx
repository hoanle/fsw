import './App.css';

import React, { useEffect, useState } from 'react';

import Game from './components/Game/Game';
import LogIn from './pages/LogIn/LogIn';
import UserInfoType from './types/UserInfoType';



function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkLoggedIn = (): string => {
    try {
      const value = localStorage.getItem("loggedIn");
      if (value != null) {
        return value;
      } else {
        return "";
      }
    } catch (error) {
      return "";
    }
  }

  const getUserData = () =>  {
    try {
      const value = localStorage.getItem("user_info");
      if (value != null) {
        return JSON.parse(value);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  const logInSuccess = (user: UserInfoType) => {
    try {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("user_info", JSON.stringify(user));
    } catch (error) {
      return "";
    }
  }

  useEffect(() => {
    let token = checkLoggedIn();
    if (token != "") {
      let user = getUserData();
      if (user != null) {
        setLoggedIn(true);
        setUser(user);
      }
    }
  }, [])
  return (
    <div className="App">
      {
        loggedIn ? <Game user={user} /> : <LogIn onLoggInSuccess={logInSuccess} />
      }
    </div>
  );
}

export default App;
