import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions/actions'

class Search extends Component {
    
    state={
        value:""
    }
    
    inputHandler=(e)=>{
       this.setState({value:e.target.value})
       const matches = this.props.songsArr.filter(song => song.title.includes(e.target.value));
       this.props.changeCopy(matches)
    }

   
    
    render() {
        return (
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Search</Form.Label>
                <Form.Control type="Text" placeholder="Enter Song Name ..." onChange={this.inputHandler} value={this.state.value}/>
            </Form.Group>
        )
    }
}

const mapStateToProps=(state)=>{
    return {songsArr:state.songs}
}

export default connect(mapStateToProps,actions)(Search) 