import React, {Component} from 'react'
import Header from '../Header/Header'
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import {ListGroup,Image,Row} from 'react-bootstrap'
import * as actions from '../../Store/Actions/actions'
import icon from '../../Resources/Icons/youtube.gif'
import './Content.css'

class Content extends Component {

    setOffset=(quote)=>{
       this.props.setOffset(quote.offset)
    }


    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1,
                start:this.props.offset
            }
        }

        const quotes = this.props.quotes
        ? this.props.quotes.map((quote, ind) => <ListGroup.Item
            action
            variant="warning"
            style={{
            width: "80%"
        }}
            key={ind}>

            <div
                key={ind}
                id="quoteButton"
                style={{
                cursor: "pointer"
            }}
                onClick={() => {
                this.setOffset(quote)
            }}>
                <i
                    class="fas fa-play"
                    key={ind}
                    style={{
                    color: "green"
                }}> {quote.text}</i>

            </div>

        </ListGroup.Item>)
        : <div></div>

        return (
            <div className="fade-in" style={{overflowX:"hidden"}}>
                <Header title={this.props.songT} align="left"/>
                <span className="scale-in-center">
                <Row>
                    <YouTube videoId={this.props.songId} opts={opts}/>
                    <Image  src={icon} style={{width:"20em",height:"25em"}} />
                </Row>
                </span>
                <ListGroup>
                    {quotes}
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({songT: state.songTitle, songId: state.songYoutubeId, quotes:state.songQuotes ,offset:state.offset})
}

export default connect(mapStateToProps,actions)(Content)