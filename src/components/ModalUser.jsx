/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText, CardImg } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>More info{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 200 }}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Hi! My name is {this.props.performer.category_group} </ModalHeader>
                    <ModalBody>
                        <h4> You can reach me <i className="fab fa-instagram">   {this.props.performer.category_group}</i></h4>
                        <CardImg style={{
                            fontFamily: 'Helvetica Neue',
                            marginBottom: "1em",
                            float: "right",
                            display: "inline-flex"
                        }} className="photo" src={this.props.performer.category_group} alt="Card image cap" />
                        <CardText>Instagram: {this.props.performer.category_group}</CardText>
                      
          </ModalBody>
                    <ModalFooter>
                        <Button color="primary" href={`mailto:${this.props.performer.category_group}?subject=Hi ${this.props.performer.category_group} Let's chat!&body=Thanks to Zillow Group, Lets schedule some time to meet up. Looking forward to talking to you.`}  onClick={this.toggle}>Send me e-Mail</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;

