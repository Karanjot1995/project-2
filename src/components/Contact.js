import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { formdata } from './actions/action'
import $ from 'jquery'


class Contact extends Component {

  constructor(props) {
    super(props);



  }

  componentDidMount() {
    $('.ftco_navbar').addClass('awake scrolled')
    $('.ftco_navbar .home').removeClass('active')
  }

  submitForm(e) {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    e.preventDefault()
    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    }



    console.log(name)
    this.props.dispatch(formdata(data))
    this.props.history.push('/form-data')
  }




  render() {
    return (
      <div className="mt-5 pt-5" id="contact-us">
        <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
          <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
              <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                <span class="subheading">Contact</span>
                <h2 class="mb-4">Contact Me</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              </div>
            </div>

            <div class="row block-9">
              <div class="col-md-7 order-md-last d-flex">
                <form action="#" class="bg-light p-4 p-md-5 contact-form" onSubmit={e => this.submitForm(e)}>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Name" id="name" required/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Your Email" id="email" required/>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject" id="subject" required/>
                  </div>
                  <div class="form-group">
                    <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message" id="message"></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5" required/>
                  </div>
                </form>

              </div>

              <div class="col-md-5 d-flex">
                <div class="row d-flex contact-info mb-5">
                  <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
                    <div class="box p-2 px-3 bg-light d-flex">
                      <div class="icon mr-3">
                        <span class="icon-map-signs"></span>
                      </div>
                      <div>
                        <h3 class="mb-3">Address</h3>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
                    <div class="box p-2 px-3 bg-light d-flex">
                      <div class="icon mr-3">
                        <span class="icon-phone2"></span>
                      </div>
                      <div>
                        <h3 class="mb-3">Contact Number</h3>
                        <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
                    <div class="box p-2 px-3 bg-light d-flex">
                      <div class="icon mr-3">
                        <span class="icon-paper-plane"></span>
                      </div>
                      <div>
                        <h3 class="mb-3">Email Address</h3>
                        <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 ftco-animate fadeInUp ftco-animated">
                    <div class="box p-2 px-3 bg-light d-flex">
                      <div class="icon mr-3">
                        <span class="icon-globe"></span>
                      </div>
                      <div>
                        <h3 class="mb-3">Website</h3>
                        <p><a href="#">yoursite.com</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps)(withRouter(Contact));

