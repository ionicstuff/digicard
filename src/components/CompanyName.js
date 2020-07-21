import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar  from "material-ui/AppBar";
import TextField  from "material-ui/TextField";
import RaisedButton  from "material-ui/RaisedButton";

export class CompanyName extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  goBack = e => {
    e.preventDefault();    
    this.props.prevStep();
  }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Add Phone Number"/>
          <TextField 
            hintText="Company name"
            floatingLabelText="Company Name"
            onChange={handleChange('companyName')}
            defaultValue={values.companyName}
          />
          <br/>
          <RaisedButton 
            label="Continue"
            primary={true}
            style={style.button}
            onClick={this.continue}
          />
          <RaisedButton 
            label="Back"
            primary={false}
            style={style.button}
            onClick={this.goBack}
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
export default CompanyName;
