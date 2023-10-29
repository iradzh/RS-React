import './ErrorTrigger.scss';

import React, { Component } from 'react';

import Star from '../../assets/star.png';
import { IErrorTriggerProps, IErrorTriggerState } from '../../types/interfaces';

class ErrorTriggerButton extends Component<
  IErrorTriggerProps,
  IErrorTriggerState
> {
  constructor(props: IErrorTriggerProps) {
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
      <div className='error_trigger'>
        <img
          alt='Death star'
          src={Star}
          className='error_trigger__img'
          onClick={this.handleClick}
        />
        <p className='error_trigger__hint'>throw error</p>
      </div>
    );
  }
}

export default ErrorTriggerButton;
