import React, { Component } from "react"

class Home extends Component {
  componentDidMount() {
    console.log("home is in componentDidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("home is in componentDidUpdate", prevProps, prevState)
  }

  componentWillUnmount() {
    console.log("home is in componentWillUnmount")
  }

  render() {
    return <div>This is home with path {this.props.match.url}</div>
  }
}

export default Home
