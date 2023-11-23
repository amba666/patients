import React, {Component, Fragment} from "react";
import Nav from "./components/layouts/Nav";
import Home from "./components/layouts/Home";
// import Login from "./components/layouts/Login";



class App extends Component{
  render() {
    return(

        <Fragment>

          <Nav />

            <Home />


        </Fragment>

    )
  }
}
export default App;
