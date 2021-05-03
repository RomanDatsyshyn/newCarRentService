import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Components/Commons/NavBar";
import Footer from "./Components/Commons/Footer";
import Home from "./Pages/Home";
import ALogin from "./Pages/Auth/ALogin";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Cars from "./Pages/Cars/Cars";
import Car from "./Pages/Cars/CarPage";

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
        <Route path="/cars/:id" component={Car} />
        <Route exact path="/admin-panel" component={ALogin} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
