import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar  from "material-ui/AppBar";
import TextField  from "material-ui/TextField";
import RaisedButton  from "material-ui/RaisedButton";

export class PhoneNumber extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Add Phone Number"/>
          <TextField 
            hintText="Enter Phone Number"
            floatingLabelText="Phone Number"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
          />
          <br/>
          <RaisedButton 
            label="Continue"
            primary={true}
            style={style.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )  
  }
}
const style = {
  button:{
    margin: 15
  }
}
export default PhoneNumber;
