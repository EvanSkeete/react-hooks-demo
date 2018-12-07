import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error) {
    console.log(error.stack);
  }

  render() {
    const { error } = this.state;

    return error ? (
      <div className="error">Error loading {error.message}</div>
    ) : (
      this.props.children
    );
  }
}
