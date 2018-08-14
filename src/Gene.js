import React, { Component } from "react"

class Gene extends Component {
  componentDidMount() {
    console.log("gene is in componentDidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("gene is in componentDidUpdate", prevProps, prevState)
  }

  componentWillUnmount() {
    console.log("gene is in componentWillUnmount")
  }

  render() {
    const { match } = this.props
    return <div>This is gene route with path {match.url}</div>
  }
}

export default Gene
