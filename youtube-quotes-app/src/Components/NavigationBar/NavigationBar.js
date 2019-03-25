import React, {Component} from 'react'
import {Col, ListGroup} from 'react-bootstrap'
import Service from '../../Service/Service'
import {connect} from 'react-redux'
import Search from '../Search/Search'
import * as actions from '../../Store/Actions/actions'
import './NavigationBar.css'


class NavigationBar extends Component {

   state={
     copy:[]
   }

   changeCopy=(copy)=>{
     this.setState({copy:[...copy]})
   }


    async componentDidMount(){
        const service = new Service("https://glacial-escarpment-40412.herokuapp.com/songs")
        const data = await service.getSongs()
        this.props.songs(data)
        this.setState({copy:[...data]})
    }


    chooseSong(song){
        this.props.setSong(song)
        this.props.setOffset(0)
        this.props.setContentVisibility(true)
    }

    render() {
        return (
            <Col>
                <Search changeCopy={this.changeCopy} />
                <ListGroup style={{overflowY:"scroll",overflowX:"hidden"}}>
                    {this.state.copy.map(song=>
                            <ListGroup.Item 
                            style={{
                                cursor:"pointer"
                            }}
                            variant="success"
                            key={song.id}
                            onClick={()=>this.chooseSong(song)}
                            >  
                            {song.title}  
                    </ListGroup.Item>)}
                </ListGroup>
            </Col>
        )
    }
}


const mapStateToProps=(state=>{
    return {
        songsArr:state.songs
    }
})


export default connect(mapStateToProps,actions)(NavigationBar)