import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route, NavLink } from 'react-router-dom';
import image1 from '../assets/images/bg_1.jpg'
import image2 from '../assets/images/bg_2.jpg'

import $ from 'jquery'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



class Home extends Component {
  constructor(props) {
    const isSSR = typeof window === 'undefined';

    if (typeof window === 'undefined') {
      global.window = {}
    }
    super(props);


    this.makeTimer = this.makeTimer.bind(this)
    this.fullHeight = this.fullHeight.bind(this)
  }
  componentDidMount(){
    setInterval(()=>{ this.makeTimer()}, 1000);
    $('.ftco_navbar').removeClass('awake scrolled')
    $('.ftco_navbar .home').addClass('active')
    this.fullHeight();


  }

makeTimer() {

  var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");
  endTime = (Date.parse(endTime) / 1000);

  var now = new Date();
  now = (Date.parse(now) / 1000);

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  if (hours < "10") { hours = "0" + hours; }
  if (minutes < "10") { minutes = "0" + minutes; }
  if (seconds < "10") { seconds = "0" + seconds; }

  $("#days").html(days + "<span>Days</span>");
  $("#hours").html(hours + "<span>Hours</span>");
  $("#minutes").html(minutes + "<span>Minutes</span>");
  $("#seconds").html(seconds + "<span>Seconds</span>");

}

	fullHeight (){

  $('.js-fullheight').css('height', $(window).height());
  $(window).resize(function () {
    $('.js-fullheight').css('height', $(window).height());
  });

};


  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
    };
    return (
      <div className="" >
        <section id="home-section" className="hero js-fullheight" style={{   }} >
          <h3 className="vr"><span>Welcome</span> to MeetUp.</h3>
          <div id="timer" className="text-center">
            <div className="time" id="days"></div>
            <div className="time" id="hours"></div>
            <div className="time" id="minutes"></div>
            <div className="time" id="seconds"></div>
          </div>
          <Slider  {...settings} animateOut={'fadeOut'} animateIn={'fadeIn'} nav={false} autoplayHoverPause={false} autoplay={true} items={1} loop={true} className="home-slider owl-carousel js-fullheight"  >
            <div className="slider-item js-fullheight" style={{   }}>
              <div className="overlay"></div>
              <div className="container-fluid px-0" style={{  }}>
                <div className="row d-md-flex no-gutters slider-text js-fullheight align-items-end justify-content-end" data-scrollax-parent="true"  >
                  <div className="one-third order-md-last js-fullheight img" style={{ "background-image": `url(/images/bg_1.jpg)`, height:'100vh'}}>
                    <div className="overlay"></div>
                  </div>
                  <div className="one-forth d-flex align-items-start align-items-md-center" data-scrollax=" properties: { translateY: '70%' }">
                    <div className="text mt-4 mt-md-0">
                      <h1 className="mb-4">Annual <span>Conference</span> 2019</h1>
                    <h2 className="mb-4">November 26-30, 2019 - 08:00am-12:00pm</h2>
                    <p><a href="#" className="btn btn-primary py-3 px-4">Get Ticket</a> <a href="#" className="btn btn-white py-3 px-4">Watch Video</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item js-fullheight" style={{   }}>
              <div className="overlay"></div>
              <div className="container-fluid px-0" style={{   }}>
                <div className="row d-md-flex no-gutters slider-text js-fullheight align-items-end justify-content-end" data-scrollax-parent="true"  >
                  <div className="one-third order-md-last js-fullheight img" style={{ "background-image": `url(/images/bg_2.jpg)`,   }}>
                    <div className="overlay"></div>
                  </div>
                  <div className="one-forth d-flex align-items-start align-items-md-center" data-scrollax=" properties: { translateY: '70%' }">
                    <div class="text mt-4 mt-md-0">
                      <h1 class="mb-4">Business <span>Conference</span> 2019</h1>
                      <h2 class="mb-4">November 26-30, 2019 - 08:00am-12:00pm</h2>
                      <p><a href="#" class="btn btn-primary py-3 px-4">Get Ticket</a> <a href="#" class="btn btn-white py-3 px-4">Watch Video</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>

          {/* <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider> */}

         
        </section>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // count: state.count,
  }
}

export default connect(mapStateToProps)(Home);