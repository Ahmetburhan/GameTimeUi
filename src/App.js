import React, { Component } from 'react';
import request from 'superagent';
import Cards from './components/Cards';
import { Button, Form, Label, Input, FormText } from 'reactstrap';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            performers: [],


        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);

    }



    componentDidMount() {
        request
            .get(`https://mobile-staging.gametime.co/v1/performers`).then(res => {
                if (res.ok) {
                    console.log(res.body)
            
                    this.setState({
                        performers : res.body.performers
                    
                    })
                } else {

                    console.log('We found nothing')

                }
            })
    };



    handleChange(event) {
        this.setState({ query: event.target.value });
        // console.log(this.state.query)
    }

    onSubmit(event) {
        console.log('New ticket search was submitted: ' + this.state.query);
        event.preventDefault();
        this.setState({ query: event.target.value });
        request
            .get(`https://mobile-staging.gametime.co/v1/performers`).then(res => {
                if (res.ok) {
                    console.log("new handle click",res.body)
                    this.setState({
                        pictures: res.body.results

                    })
                } else {
                    console.log('We found nothing')
                }
            })

    }

    render() {

        return ( <div className = "App" >


            <Form onSubmit={this.onSubmit}>
                <Label> 
                    <Input type="text" placeholder="search photos" value={this.state.value} onChange={this.handleChange} />
                </Label>
                <Button type="submit" value="Submit">Submit </Button>
            </Form>


            <Cards handleChange = {
                this.handleChange
            }
                performers = {
                    this.state.performers
            }
          />

            </div>
        )
    }
}
export default App;