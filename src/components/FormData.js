import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';

class FormData extends Component {



  render() {
    let formdata = this.props.formdata
    console.log(this.props.formdata)

    if (this.props.formdata) {
      return (
        <div className="form-data">
          <div>
            <p>Name: {formdata.name}</p>
            <p>Email: {formdata.email}</p>
            <p>Subject: {formdata.subject}</p>
            <p>Message: {formdata.message}</p>
          </div>
        </div>
      );
    } else {
      return ''
    }
  }
}



function mapStateToProps(state) {
  return {
    navdata: state.navdata,
    formdata: state.formdata
  }
}

export default connect(mapStateToProps)(FormData);