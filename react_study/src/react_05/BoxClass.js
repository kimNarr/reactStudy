import React, { Component } from 'react'

class BoxClass extends Component {

    componentWillUnmount() {
        console.log("componentWillUnmount 끝")
    }

  render() {
    return (
      <div>
        <h2>Box : {this.props.num}</h2>
      </div>
    )
  }
}

export default BoxClass