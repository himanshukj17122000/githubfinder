import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import NotFound from "../src/components/Pages/NotFound";
import User from "./components/Users/User";
import Home from "../src/components/Pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/Pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/alertState";

const App = () => {
  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />

            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' render={About} />
                <Route exact path='/user/:login' component={User} />} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
