import './ErrorBoundary.scss';

import { Component, ErrorInfo } from 'react';

import RickError from '../../assets/rick_suprised.png';
import { IErrBoundProps, IErrBoundState } from '../../types/interfaces';

class ErrorBoundary extends Component<IErrBoundProps, IErrBoundState> {
  constructor(props: IErrBoundProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      'Hey, this is ErrorBoundary. I caught an error, look: ',
      error,
      errorInfo
    );
    this.setState({ hasError: true });
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className='error_boundary'>
          <h1>
            Whoa, it seems like we stumbled into an error dimension here.
            <br />I will, uh, do some sciencey stuff to fix it, okay?
          </h1>
          <img src={RickError} alt='Rick' className='error_img' />
          <button onClick={this.resetError} className='error_boundary__reset'>
            Reset
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
