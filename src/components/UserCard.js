import React, { Component } from 'react';

export class UserCard extends Component {
  state = {
    step: 1,
    phoneNumber: '',
  };

  //Next step
  nextStep = () => {
      const { step } = this.state;
      this.setState({
          step = step + 1
      });
  };
  //Prev step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
        step = step - 1
    });
};
  //handle change
  handleChange = input = e =>{
      this.setState({ [input]: e.target.value});
  }
  render() {
    return <div></div>;
  }
}

export default UserCard;
