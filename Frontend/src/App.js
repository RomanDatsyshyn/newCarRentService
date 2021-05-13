import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
import Home from "./Pages/Home";
import ALogin from "./Pages/Auth/ALogin";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Profile from "./Pages/Profile";
import Cars from "./Pages/Cars/Cars";
import Car from "./Pages/Cars/CarPage";
import AddCar from "./Pages/Cars/AddCar";
import EditCarTown from "./Pages/Cars/EditCarTown";
import EditCarPrice from "./Pages/Cars/EditCarPrice";
import EditCarSegment from "./Pages/Cars/EditCarSegment";

import PrivateRoute from "./utils/PrivateRoute";

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

        <PrivateRoute path="/profile" component={Profile} exact />
        <PrivateRoute path="/addcar" component={AddCar} exact />
        <PrivateRoute
          path="/car/:id/edit/carTown"
          component={EditCarTown}
          exact
        />
        <PrivateRoute
          path="/car/:id/edit/carPrice"
          component={EditCarPrice}
          exact
        />
        <PrivateRoute
          path="/car/:id/edit/carSegment"
          component={EditCarSegment}
          exact
        />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
