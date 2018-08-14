import React, { Component } from "react"

class Chromosome extends Component {
  componentDidMount() {
    console.log("chromosome is in componentDidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("chromosome is in componentDidUpdate", prevProps, prevState)
  }

  componentWillUnmount() {
    console.log("chromosome is in componentWillUnmount")
  }

  render() {
    const { match } = this.props
    return <div>This is chromosome route with path {match.url}</div>
  }
}

export default Chromosome
