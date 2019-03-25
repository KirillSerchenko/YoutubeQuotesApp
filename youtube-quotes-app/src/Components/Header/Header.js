import React, { Component } from 'react'
import {Row} from 'react-bootstrap'
export default class Header extends Component {
  render() {
    return (
      <Row>
        <h1  style={{width:"100%",textAlign:this.props.align}}>{this.props.title}</h1>
      </Row>
    )
  }
}


