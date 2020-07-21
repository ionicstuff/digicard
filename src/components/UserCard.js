import React, { Component } from "react";
import PhoneNumber from "./PhoneNumber";
import CompanyName from "./CompanyName";
import TemplateSelection from "./TemplateSelection";

export class UserCard extends Component {
  state = {
    step: 1,
    phoneNumber: "",
    companyName: "",
    templateName:"",
  };

  //Next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //Prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //handle change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { phoneNumber, companyName, templateName } = this.state;
    const values = { phoneNumber, companyName, templateName };

    switch (step) {
      case 1:
        return (
          <PhoneNumber
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <CompanyName
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <TemplateSelection
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>card success</h1>;
    }
  }
}

export default UserCard;
