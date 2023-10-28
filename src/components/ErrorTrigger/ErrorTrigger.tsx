import React, { Component } from 'react';

interface ErrorTriggerButtonProps {}

interface ErrorTriggerButtonState {
  error: boolean;
}

class ErrorTriggerButton extends Component<
  ErrorTriggerButtonProps,
  ErrorTriggerButtonState
> {
  constructor(props: ErrorTriggerButtonProps) {
    super(props);
    this.state = { error: false };
  }

  handleClick = () => {
    this.setState({ error: true });
  };

  render() {
    if (this.state.error) {
      throw new Error('Error demonstration');
    }
    return (
      <button onClick={this.handleClick} className='error_trigger__btn'>
        Throw Error
      </button>
    );
  }
}

export default ErrorTriggerButton;
