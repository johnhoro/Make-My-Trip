import React from "react";
import { withRouter } from "react-router-dom";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(`testing`);
    this.setState({ hasError: true, error, errorInfo });
  }
  handleClick = () => {
    this.setState({ hasError: false });
    this.props.history.push("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundry">
          <h1>Something went wrong.</h1>
          <p>Go back to Home Page</p>
          <button className="pointer" onClick={this.handleClick}>
            Click here
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
export default withRouter(ErrorBoundary);
