import React, { Component } from "react";

/* error boundary component which details 
 any errors a child component passed within 
may have (this is done with the life cycle hook
componentDidCatch()), also renders a message 
instead of the component error */
class ErrorBoundries extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>{`ooops`}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundries;
