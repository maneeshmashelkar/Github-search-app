import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//react-router
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//Components
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./Config/firebaseConfig";

//init firebase

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
