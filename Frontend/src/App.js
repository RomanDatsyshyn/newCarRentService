import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
import Home from "./components/Pages/Home";
import ALogin from "./components/Pages/ALogin";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Cars from "./components/Pages/Cars";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/cars" component={Cars} />
        <Route exact path="/admin-panel" component={ALogin} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
