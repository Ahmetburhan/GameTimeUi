import React from 'react';
import {
    Col, Card, CardImg, CardText, CardImgOverlay,
    CardTitle, CardSubtitle, 
} from 'reactstrap';
import ModalUser from './ModalUser';
import LazyLoad from 'react-lazyload';


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
                                <CardImg onClick={this.toggle} style={{ marginBottom: '1rem' }} className="photo" src={performer.hero_image_url || "https://chefschoice.com/wp-content/uploads/placeholder-waffle.jpg"} alt="Card image cap" />
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