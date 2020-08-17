import React, {Component} from 'react';
import Navigation from './components/Navigation';
import {navdata} from './components/actions/action'
import { connect } from 'react-redux';
import Axios from 'axios';
import { Switch, Route, NavLink, withRouter, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormData from './components/FormData';

import $ from 'jquery'
import ErrorPage from './components/404';

class App extends Component {

  constructor(props) {
    if (typeof window === 'undefined') {
      global.window = {}
    }
    super(props);
    this.state = {
      winWid: window.innerWidth,
      isOpen: false,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.windowWidth = this.windowWidth.bind(this)

  }



  componentDidMount(){
    window.addEventListener("resize", this.windowWidth.bind(this));

    Axios.get('https://api.gyftr.net/smartbuyapi/hdfc/api/v1/home/categories')
      .then(response => {
        this.props.dispatch(navdata(response.data))
      })

  }




  windowWidth() {
    this.setState({
      winWid: window.innerWidth,
      // menuVisible:false,
    });
  }

  toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleBtn = document.getElementById("nav-toggler");
    if (sidebar.style.display == "none") {
      sidebar.style.display = "block";
      sidebar.classList.add("collapsible");
      toggleBtn.classList.add("open-close");

      this.setState({
        isOpen: true,
      });
    } else {
      sidebar.style.display = "none";
      sidebar.classList.remove("collapsible");
      toggleBtn.classList.remove("open-close");
      this.setState({
        isOpen: false,
      });
    }
  }



  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target awake scrolled" id="ftco-navbar" style={{ position: "fixed", top: "0"}}>
          <div className="container">
            <a className="navbar-brand" href="index.html">Meet<span>Up.</span></a>
 

            <div className="d-flex" id="ftco-nav">
              <ul className="navbar-nav nav ml-auto">
                <li className="nav-item"><NavLink to="/" className="nav-link home">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/contact" className="nav-link contact">Contact</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>

        {this.state.winWid < 992 ? (
          <button
            onClick={() => this.toggleSidebar()}
            style={{ position: "fixed", top: "20px", zIndex: 1000 }}
            id="nav-toggler"
          >
            {/* <img src={this.state.isOpen?"./images/close.png":"./images/menu.png"} height="30px"/> */}

            <FontAwesomeIcon
              icon={this.state.isOpen ? faTimes : faBars}
              style={{ height: "25px", width: "25px" }}
            />
          </button>
        ) : (
            ""
          )}
        <div style={{ 'position': 'fixed', 'top': '75px', 'left': 0, right: 0, 'z-index': '999' }}>
          <Navigation />

        </div>

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/contact" render={() => <Contact />} />
          {Object.keys(this.props.formdata).length!=0 ? <Route exact path="/form-data" render={() => <FormData />} /> : <Route path="/" render={() => <ErrorPage />} />}
          <Route path="/" render={() => <ErrorPage />} />


        </Switch>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    navdata: state.navdata,
    formdata: state.formdata
  }
}

export default connect(mapStateToProps)(withRouter(App));