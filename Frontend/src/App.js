import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        {/* <Route exact path="/" component={SearchForm} /> */}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
