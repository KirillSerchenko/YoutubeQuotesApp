import React, {Component} from 'react';
import Header from '../Header/Header'
import {Col,Row} from 'react-bootstrap'
import NavigationBar from '../NavigationBar/NavigationBar'
import Content from '../Content/Content'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div>
                <Header title="YOUTUBE QUOTES APP" align="center"/>
                <Row>
                    <Col md={3}>
                        <NavigationBar/>
                    </Col>
                    <Col md={9}>
                    {this.props.contentVisibility?<Content />:<h1 style={{
                        postion:"relative",
                        marginTop:"30%",
                        marginLeft:"20%"
                    }}> Please Select Your Favorite Song </h1>}  
                    </Col>
                </Row>
                </div>   
            );
    }
}


const mapStateToProps=(state=>{
    return{
       contentVisibility:state.contentVisibility
    }
})

export default connect(mapStateToProps)(App);
