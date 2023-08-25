import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDeriveStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary cathch an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          There was an error <Link to="/">go back home</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
