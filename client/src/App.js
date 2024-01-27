import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Result from "./components/Result/Result";
import About from "./components/about/About";
import HomeCard from "./components/home/HomeCard";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Details from "./components/DetailPages/Details";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile/Profile";
import Profile2 from "./components/Profile/Profile2";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Result" component={Result} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Profile2" component={Profile2} />

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Details/:id" component={Details} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
