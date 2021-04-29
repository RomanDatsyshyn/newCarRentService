import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
import Home from "./components/Pages/Home";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Route exact path="/" component={Home} />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
