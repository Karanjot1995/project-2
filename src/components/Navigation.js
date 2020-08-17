import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route ,Link} from 'react-router-dom';
import Axios from 'axios';

class Navigation extends Component {
  constructor(props) {
    super(props);

    if (typeof window === 'undefined') {
  global.window = {}
}
    this.state = {
      winWid: window.innerWidth
    };

    this.windowWidth = this.windowWidth.bind(this)
    this.dropdown = this.dropdown.bind(this)
   
  }
 


  componentDidMount() {
    window.addEventListener("resize", this.windowWidth.bind(this));
    if (window.innerWidth < 992) {
      this.setState({
        menuVisible: false,
      });
    }
    window.addEventListener("mousedown", this.handleClickOutside);
  }

  windowWidth() {
    this.setState({
      winWid: window.innerWidth,
      // menuVisible:false,
    });
  }

  dropdown() {
    const drpdwn = document.getElementById("drpdwn");
    const dropdown = document.getElementById("dropdown-content");
    if (dropdown.classList.contains("d-none")) {
      dropdown.classList.remove("d-none");
      drpdwn.classList.add("active");
    } else {
      drpdwn.classList.remove("active");
      dropdown.classList.add("d-none");
    }
  }


  render() {
    console.log(this.props.navdata)

    if (this.props.navdata && this.props.navdata.code == 200){
      return (
        <div className="nav-container"
          id="sidebar"
          style={
            this.state.winWid > 992 ? { display: "block", width:"100%" } : { display: "none" }
          }>
       

          <nav class="row navbar navbar-expand-lg navbar-white text-dark bg-white bg-header-m">
            <div class="collapse navbar-collapse container p0 justify-content-around" style={{ "height": "76px" }}>
              <ul class="navbar-nav ">
                {this.props.navdata.data.map(data => 
                  <li class="nav-item main-nav ">
                    <a class="nav-link text-dark text-center" href="#" rel="noreferrer" data-toggle="modal" data-target="#exitPopup">
                      <img src={data.icon_url} alt={data.name} class="menu-icon-new  mt-1 lazyloaded" />
                  <p class="menu-name">{data.name}</p>
                    </a>
                  </li>
                  
                )}
                
              </ul>
            </div>
          </nav>
        </div>
      );
    }else{
      return ''
    }
  }
}



function mapStateToProps(state) {
  return {
    navdata: state.navdata
  }
}

export default connect(mapStateToProps)(Navigation);