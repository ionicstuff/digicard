import React, { Component } from 'react';
import CompanyName from './CompanyName';
import phoneNumber, { PhoneNumber } from './PhoneNumber';

export class UserCard extends Component {
  state = {
    step: 1,
    phoneNumber: '',
  };

  //Next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //Prev step
  nextStep = () => {
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
    const { step, phoneNumber } = this.state;
    const values = { phoneNumber };

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
        return <h1>Company basic details</h1>;
      case 3:
        return <h1>Company about us details</h1>;
      case 4:
        return <h1>card success</h1>;
    }
  }
}

export default UserCard;
