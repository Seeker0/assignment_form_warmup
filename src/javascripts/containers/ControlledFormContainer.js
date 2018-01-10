import React, { Component } from 'react';
import ControlledForm from '../components/ControlledForm';
import { validateForm, validateField } from '../helpers';

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: '',
      examplePassword: '',
      exampleURL: ''
    };
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: validateField({ [e.target.name]: e.target.value }, e.target.name)
    });
    console.log(this.state.errors);
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      errors: validateForm(this.state)
    });
    if (!Object.keys(this.state.errors).length) {
      this.formSuccess();
    }
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: '',
        examplePassword: '',
        exampleURL: ''
      },
      () => console.log('Success!')
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
