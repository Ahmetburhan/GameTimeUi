import React from 'react';
import {
    Col, Card, CardImg, CardText, CardBody, CardImgOverlay,
    CardTitle, CardSubtitle, Button, Tooltip, UncontrolledTooltip, Popover, PopoverHeader, PopoverBody, Collapse
} from 'reactstrap';
import ModalUser from './ModalUser';

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
            

                <h2>{performers && performers.length} Tickets Found</h2>
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
                                <CardImg onClick={this.toggle} style={{ marginBottom: '1rem' }} className="photo" src={performer.hero_image_url || "https://chefschoice.com/wp-content/uploads/placeholder-waffle.jpg"} alt="Card image cap" />
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