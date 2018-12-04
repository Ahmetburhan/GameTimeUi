import React from 'react';
import {
    Col, Card, CardImg, CardText, CardImgOverlay,
    CardTitle, CardSubtitle, 
} from 'reactstrap';
import ModalUser from './ModalUser';
import LazyLoad from 'react-lazyload';

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


export default class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
             collapse: false
        };

    }
    state = {
        performers: this.props.performers,
    }
  
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen,
            collapse: !this.state.collapse
        });
    }

    render() {
        // console.log("props coming here", this.props)
        const performers = this.props.performers;
        
        //disabling the logic due to CORS Error on server
        // Access to fetch at 'https://images.gametime.co/cbbsdsu/hero@4x.jpg' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.If an opaque response serves your needs, set the request's mode to 'no- cors' to fetch the resource with CORS disabled.
        let imgChecker = function (url) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr && xhr.status === 200) {
                    console.log('DONE', xhr.status, "im loading image");
                    return url;
                } else {
                    console.log('DONE', xhr.status, "Sorry no image found, im loading default image");
                    return "https://i.pinimg.com/originals/4d/79/e4/4d79e45299ba276f530cbda84f5eca05.gif";

                }
            };

            xhr.send(null);
        }

        

        
        return (

            <div>
                <h1 className="banner">{performers && performers.length} Tickets Found</h1>
            <div className="card-columns">
                    {performers && performers.map((performer, index) => {
                    // console.log(performers)
                    // console.log(index)
                    return (
                             <Col>

                            <Card id="photoCard" inverse style={{
                                fontFamily: 'Helvetica Neue',
                                marginBottom: "1em"
                            }} >
                                <LazyLoad height={200} >
                        <CardImg onClick={this.toggle} style={{ marginBottom: '1rem' }} className="photo" src={performer.hero_image_url /*imageChecker2(performer.hero_image_url)*/} alt="Card image cap" />
                                </LazyLoad>
                                <CardImgOverlay>
                                    <CardTitle>{performer.name}</CardTitle>
                                    <CardSubtitle>
                                        <i className="fab fa-instagram">   {performer.medium_name}</i>

                                  </CardSubtitle>
                                    <CardText>#{performer.slug}
                                    </CardText>
                                    <CardText>
                                        <i className="fas fa-heart" style={{ fontSize: "1.5rem", color: "white", float: "right" }}> #{performer.medium_name}</i>                      
                                    </CardText>
                                    <ModalUser performer={performer} />

                                </CardImgOverlay>
                            </Card>
                        </Col>
                    )
                })
                }
            </div>
            </div>

        )
    }
}