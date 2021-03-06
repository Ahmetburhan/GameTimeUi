import React, { Component, lazy, Suspense } from 'react';
import request from 'superagent';
//enabling lazy loading
//import Cards from './components/Cards';
import { Button, Form, Label, Input, Container, Row,} from 'reactstrap';
const Cards = lazy(() => import('./components/Cards'));
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            performers: [],
            query: "",
            filteredPerformers:[],
        }
     this.onSubmit = this.onSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount() {
        request
            .get(`https://mobile-staging.gametime.co/v1/performers`).then(res => {
                if (res.ok) {
                    // console.log(res.body)
                    window.performers = res.body.performers;
                    // console.log(window.performers)
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

    onSubmit = (event) =>{
        console.log('New ticket search was submitted: ' + this.state.query);
        event.preventDefault();
        this.setState({
            query: event.target.value,
        });
        let filteredPerformers = window.performers.filter(performer => performer.category_group === this.state.query && this.state.query.toLowerCase());
        // console.log(this.state.query.toLowerCase())
        // console.log(filteredPerformers)
        this.setState({
            performers: filteredPerformers,
        });
        event.target.reset() 
       }
    onReset = () => {
        this.setState({
            performers: window.performers
        });
    }

    render() {

        return ( <div className = "App" >


            <Form onSubmit={this.onSubmit}>
                <Label> 
                    <Input type="text" placeholder="sport,concert,etc." value={this.state.value} onChange={this.handleChange} id="filter"/>
                </Label>
                <Button color="success" type="submit" value="Submit">Submit </Button>
                <Button type="button" onClick={this.onReset}>Reset </Button>

            </Form>

            <Container fluid>
                <Row>
           <Suspense fallback={<div><h1 className="banner">Page is loading, Please Wait!...</h1></div>}>
            <Cards handleChange = {
                this.handleChange
            }
                performers = {
                    this.state.performers
            }
          />
            </Suspense>
          </Row>
            </Container>


            </div>
        )
    }
}
export default App;